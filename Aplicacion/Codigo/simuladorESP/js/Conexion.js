function Conexion(mac, peticionesLista){
  this.mac             = mac;
  this.peticionesLista = peticionesLista;
  this.listaMensajes   = new ListaMensajes();


  this.urlServidor = "ws://192.168.5.20:8080";
  this.conectado = false;
  // conectando es para que no vuelva a intentar conectar mientras esta abriendo la conexion
  this.conectando = false;
  this.intentosDeConexion = 0;
  this.websocket;

  this.conectar();
}

Conexion.prototype.websocketInstanciar = function () {
  if (this.websocket == null){
    this.websocket = new WebSocket(this.urlServidor);
  }
};

Conexion.prototype.isConectando = function () {
  if (this.websocket.readyState == 0) return true;
  else return false;
};

Conexion.prototype.isCerrada = function () {
  if (this.websocket.readyState == 3) return true;
  else return false;
};

Conexion.prototype.isConectado = function () {
  if (this.websocket.readyState == 1) return true;
  else return false;
};

Conexion.prototype.conectar = function () {
  this.websocketInstanciar(); // instancia si no esta instanciado

  console.log("Estado " + this.websocket.readyState);
  if (this.isCerrada()){ // Si esta cerrada tengo que volver a instanciar le objeto
    this.websocket = new WebSocket(this.urlServidor);
  }

  if (!this.isConectado()){
    this.bucleConectar(this);
  }else{
    this.metodosConexion();
    this.enviarListaMensajes();
  }
};

Conexion.prototype.bucleConectar = function (_this) {
  this.intentosDeConexion++;
  var bucleConectar = setTimeout(function(){
      console.log("Intento de conexion " + _this.intentosDeConexion);
      _this.conectar();
  }, 2000)
};

Conexion.prototype.conexionEstablecida = function () {
  console.log("Conxion establecida");
};


Conexion.prototype.metodosConexion = function () {
  var _this = this;

  // Conexion abierta
  this.websocket.onopen = function(evt) {
    //_this.conexionAbierta(evt);

    console.log(_this.websocket);
    console.log(_this.websocket.readyState);
    _this.conectando = false;
    _this.conectado = true;
    _this.websocket.send("Conecto");

  };

  // Conexion cerrada
  this.websocket.onclose = function(evt) {
    _this.conectado = false;
    _this.conectar();
    console.log("La conexion se ha cerrado " + _this.websocket.readyState);

  };

  // Error de conexion
  this.websocket.onerror = function(evt) {
    _this.conectado = false;
    console.log("Error en la conexion: " + _this.websocket.readyState);
  };

  // Mensaje entrante
  this.websocket.onmessage = function(evt) {
    // var mensaje = evt.data;
    // console.log(mensaje);
    // if (mensaje.startsWith("log:")) {
    //    mensaje = mensaje.slice("log:".length);
    //    console.log(mensaje);
    // }else if (mensaje.startsWith("connected:")) {
    //    mensaje = mensaje.slice("connected:".length);
    //    console.log(mensaje);
    // }
    console.log("Mendaje recivido");
  };
};


//////////////////////////////////////////////////////////////////

Conexion.prototype.isConexionIniciada = function () {
  return this.conectado;
};

Conexion.prototype.getUrlServidor = function () {
  return this.urlServidor;
};

Conexion.prototype.enviarDatos = function(clave, valor) {
	var mensaje = "Dispositivo " + this.mac + ": " + clave + " " + valor;
	this.enviarMensaje(mensaje);
  console.log("Antes de enviar " + mensaje);
};


Conexion.prototype.enviarMensaje = function (mensaje) {
  if (this.isSePuedeEnviar()){
    this.enviar(mensaje);
  }else{ // Si la conexion no esta iniciada llamo a la conesion y mento el mensaje en la cola
    this.addListaMensaje(mensaje);
  }
};

Conexion.prototype.enviar = function (msg) {
  this.websocket.send(msg);
  console.log("Enviado " + msg);
};

// Para que los mensajes se envien tiene que aver conexión y la lista estar vacia
// Tiene que estar vacia la lista para que no se cuelen mensajes mientras se esta vaciando
Conexion.prototype.isSePuedeEnviar = function () {
  console.log("La conexion " + this.isConectado());
  console.log("La lista esta vacia " + this.listaMensajes.isVacia());
  if (this.isConectado() && this.listaMensajes.isVacia()) return true;
  else return false;
};

///// COLA DE MENSAGES
Conexion.prototype.addListaMensaje = function (msg) {
  this.listaMensajes.addMensaje(msg);
  console.log(this.listaMensajes);
};

Conexion.prototype.enviarListaMensajes = function () {
  while (this.listaMensajes.getNElementos() != 0) {
    this.enviar(this.listaMensajes.ultimoElemento()); // Envia de mas antiguo a mas moderno
  }
  console.log("Lista vaciada");
};
