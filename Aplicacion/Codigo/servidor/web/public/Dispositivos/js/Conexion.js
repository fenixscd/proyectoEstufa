function Conexion(commandsLista){
  this.listaPeticionesPendientes = new ListaPeticionesPendientes();
  this.commandsLista = commandsLista;

  this.urlServidor = "ws://192.168.5.20:8080";
  this.intentosDeConexion = 0;
  this.websocket;

  this.conectar();
}

Conexion.prototype.websocketInstanciar = function () {
  var _this = this;
  if (this.websocket == null || this.isCerrada()){
    this.websocket = new WebSocket(this.urlServidor);
    this.websocket.onopen = function(evt) { _this.conexionAbierta(evt) };
    this.websocket.onclose = function(evt) { _this.conexionCerrada(evt); };
    this.websocket.onmessage = function(evt) { _this.conexionError(evt); };
    this.websocket.onerror = function(evt) { _this.conexionMensajeRecivido(evt); };
  }
};


////////   EVENTOS RELACIONADOS CON LA CONEXION ////////////

Conexion.prototype.conexionAbierta = function (evt) {
  var command = this.commandsLista.getCommand("cambiarEstadoConexion");
  if (command){
    command.ejecutar(true);
  }

  this.enviarListaMensajes();
  console.log("Conectado codigo: " + this.websocket.readyState);
};

Conexion.prototype.conexionCerrada = function (evt) {
  // Desconectar los dispositivos (Para que aparezcan en la consola)
  var command = this.commandsLista.getCommand("cambiarEstadoConexion");

  if (command){
    command.ejecutar(false);
  }else {
    console.log("No exixte elcomando");
  }
  this.conectar();
};

Conexion.prototype.conexionError = function (evt) {
  console.log("Error en la conexion: " + this.websocket.readyState);
};

Conexion.prototype.conexionMensajeRecivido = function (evt) {
  var mensaje = evt.data;
  console.log(mensaje);
  // if (mensaje.startsWith("log:")) {
  //    mensaje = mensaje.slice("log:".length);
  //    console.log(mensaje);
  // }else if (mensaje.startsWith("connected:")) {
  //    mensaje = mensaje.slice("connected:".length);
  //    console.log(mensaje);
  // }
  console.log("Metodo de mensaje recivido");

};

//////////////////////////////////////////////////////////////////


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
  this.intentosDeConexion++;
  console.log("Intento de conexion " + this.intentosDeConexion);
};


Conexion.prototype.conexionEstablecida = function () {
  console.log("Conxion establecida");
};

Conexion.prototype.getUrlServidor = function () {
  return this.urlServidor;
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
  if (this.isConectado() && this.listaPeticionesPendientes.isListaVacia()) return true;
  else return false;
};

///// COLA DE MENSAGES
Conexion.prototype.addListaMensaje = function (msg) {
  this.listaPeticionesPendientes.addMensaje(msg);
  console.log(this.listaPeticionesPendientes);
};

Conexion.prototype.enviarListaMensajes = function () {
  // Registrar dispositivo

  while (this.listaPeticionesPendientes.isPeticionesPendientes()) {
    if (this.isConectado()){
      this.enviar(this.listaPeticionesPendientes.ultimoElemento()); // Envia de mas antiguo a mas moderno
    }else {
      break;
    }
  }
  console.log("Lista vaciada");
};
