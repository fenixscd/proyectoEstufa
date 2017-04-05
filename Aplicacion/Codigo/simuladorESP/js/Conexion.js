function Conexion(esp8266, display){
  this.esp8266 = esp8266;
  this.mac = esp8266.getMac();


  this.urlServidor = "ws://192.168.5.20:8080";
  this.websocket;
  this.conectado = false;
  this.websocket = new WebSocket(this.urlServidor);

  var _this = this;

  this.websocket.onopen = function(evt) {
    _this.conexionAbierta(evt);
  };


  this.websocket.onclose = function(evt) { console.log("Conexion cerrada") };
  this.websocket.onmessage = function(evt) { console.log("Entrad de mensaje") };
  this.websocket.onerror = function(evt) { console.log("Evento de error") };
}


////////   EVENTOS RELACIONADOS CON LA CONEXION ////////////

Conexion.prototype.conexionAbierta = function (evt) {
  console.log(this.websocket);
  this.conectado = true;
  this.websocket.send("Conecto");
  this.enviarMensaje
};

Conexion.prototype.conexionCerrada = function (evt) {
  console.log("La conexion se ha cerrado");
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
  console.log(msg);
};
