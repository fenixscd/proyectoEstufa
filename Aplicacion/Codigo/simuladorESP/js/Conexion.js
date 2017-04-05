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

Conexion.prototype.conexionAbierta = function (evt) {
  console.log("Llego al metod conexionAbierta");
  this.conectado = true;
  console.log(this.websocket);
  this.websocket.send("Conecto");
};





Conexion.prototype.isConexionIniciada = function () {
  return this.conectado;
};


Conexion.prototype.getUrlServidor = function () {
  return this.urlServidor;
};


Conexion.prototype.onOpen = function (evt) {
  console.log("Conexion avierta " + esp8266.getMac());
};

Conexion.prototype.enviarAlgo = function () {
  this.getWebsocket().send(" HOtro mensaje ");
};

///////////////////////////////////////
Conexion.prototype.enviar = function (mensaje) {
  // var conexion = this.websocket;
  // this.websocket.send("Hola desde enviar");
  //  setTimeout(this.websocket.send("Hola desde enviar"), 500000);
    setTimeout.call(console.log(this.getUrlServidor()), 2000);
  //  console.log(mensaje);

};

Conexion.prototype.enviarDatos = function(clave, valor) {
	var mensaje = "Dispositivo " + this.mac + ": " + clave + " " + valor;
	this.enviar(mensaje);
  //this.getWebsocket().send(enviar);
};

Conexion.prototype.cargando = function () {


};
