function Conexion(esp8266, display){
  this.esp8266 = esp8266;
  this.mac = esp8266.getMac();


  this.urlServidor = "ws://192.168.5.20:8080";
  this.websocket = new WebSocket(this.urlServidor);
  this.conectado = false;



  var _this = this;
  this.websocket.onopen = function(evt) {
    _this.conexionAbierta(evt);
  };


  this.websocket.onclose = function(evt) {
    _this.conexionCerrada();
  };
  this.websocket.onmessage = function(evt) { console.log("Entrad de mensaje") };
  this.websocket.onerror = function(evt) { console.log("Evento de error") };

  //this.conectar();
}

Conexion.prototype.conectar = function () {
  this.websocket = new WebSocket(this.urlServidor);
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
  console.log(this.websocket.readyState)
};

Conexion.prototype.conexionError = function (evt) {
  console.log("Error en la conexion");
  console.log(this.websocket.readyState)
};

Conexion.prototype.conexionMensajeRecivido = function (evt) {
  console.log("Mendaje recivido");
};

Conexion.prototype.conexionError = function (evt) {
  console.log("Se ha produciodo un error en la conexion");
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
  var bucleEnviar = setInterval(function(){
    if (_conexion.isConexionIniciada()){ // Cuando se conecte
      _conexion.enviar(msg);
      clearInterval(bucleEnviar);
    }else{ // Mientras no este conectado
      console.log("No estoy conectado");
    }
  }, 2000)
};

Conexion.prototype.enviar = function (msg) {
  this.websocket.send(msg);
  console.log("Enviado " + msg);
};
