function Conexion(esp8266, display){
  this.esp8266 = esp8266;
  this.mac = esp8266.getMac();


  this.urlServidor = "ws://192.168.5.20:8080";
  this.conectado = false;
  this.conectando = false;
  this.intentosDeConexion = 0;
  this.websocket;

  this.conectar();
}

Conexion.prototype.conectar = function () {
  this.websocket = new WebSocket(this.urlServidor);
  console.log("Estado " + this.websocket.readyState);
  if (this.conectando){
    this.bucleConectar(this);
  }else{
    this.metodosConexion(this);
  }
};

Conexion.prototype.bucleConectar = function (_this) {
  this.conectando = true;
  this.intentosDeConexion++;
  var bucleConectar = setTimeout(function(){
      console.log("Intento de conexion " + _this.intentosDeConexion);
      _this.conectar();
  }, 2000)
};

Conexion.prototype.metodosConexion = function () {
  var _this = this;
  this.websocket.onopen = function(evt) {
    _this.conexionAbierta(evt);
  };

  this.websocket.onclose = function(evt) {
    _this.conexionCerrada();
  };

  this.websocket.onerror = function(evt) {
    _this.conexionError(evt);
  };

  this.websocket.onmessage = function(evt) {
    _this.conexionMensajeRecivido(evt);
  };
};



////////   EVENTOS RELACIONADOS CON LA CONEXION ////////////

Conexion.prototype.conexionAbierta = function (evt) {
  console.log(this.websocket);
  console.log(this.websocket.readyState);
  this.conectado = true;
  this.websocket.send("Conecto");
  this.enviarMensaje
};

Conexion.prototype.conexionCerrada = function (evt) {
  console.log("La conexion se ha cerrado");
  this.conectado = false;
  console.log(this.websocket.readyState)
};

Conexion.prototype.conexionError = function (evt) {
  console.log("Error en la conexion");
  this.conectado = false;
  console.log(this.websocket.readyState)
};

Conexion.prototype.conexionError = function (evt) {
  this.conectado = false;
  console.log("Se ha produciodo un error en la conexion");
};

Conexion.prototype.conexionMensajeRecivido = function (evt) {
  console.log("Mendaje recivido");
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
  if (this.isConexionIniciada()){
    this.enviar(mensaje);
  }else{
    console.log("Enviado al bucle");
    this.bucleEnviar(this, mensaje);
  }
};



Conexion.prototype.bucleEnviar = function (_conexion, msg) {
  var contador = 0;
  var bucleEnviar = setInterval(function(){
    if (_conexion.websocket.readyState == 1){ // Cuando se conecte
      _conexion.enviar(msg);
      clearInterval(bucleEnviar);
    }else{ // Mientras no este conectado
      contador++;
      console.log("Intento de envio " + contador);
    }
  }, 2000)
};

Conexion.prototype.enviar = function (msg) {
  this.websocket.send(msg);
  console.log("Enviado " + msg);
};
