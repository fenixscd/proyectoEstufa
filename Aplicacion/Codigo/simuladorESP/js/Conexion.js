function Conexion(esp8266, display){
  this.esp8266 = esp8266;
  this.mac = esp8266.getMac();

  this.urlServidor = "ws://192.168.5.20:8080";
  this.websocket = new WebSocket(urlServidor);

}

Conexion.prototype.conectar = function () {
  console.log("Antes de conectar");
  this.urlServidor = "ws://192.168.5.20:8080";
  this.websocket = new WebSocket(urlServidor);
  console.log("Despues de genrar el WebSocket");
  this.VerificarWebSocket();
};

Conexion.prototype.VerificarWebSocket = function () {
  if (this.WebSocket === undefined) {
    console.log("Socket no soportado");
  }else {
     if (typeof String.prototype.startsWith != "function") {
        String.prototype.startsWith = function (str) {
        return this.indexOf(str) == 0;
        };
     }
     window.addEventListener("load", onLoad, false);
  }
};




Conexion.prototype.enviar = function (msg) {

  console.log("Enviar datos: " + msg);
};

Conexion.prototype.recivir = function () {

};

Conexion.prototype.enviarDatos = function(clave, valor) {
	var enviar = "Dispositivo " + this.mac + ": " + clave + " " + valor;
	this.enviar(enviar);
};



if (window.WebSocket === undefined) {
  console.log("Socket no soportado");
}else {
   if (typeof String.prototype.startsWith != "function") {
      String.prototype.startsWith = function (str) {
      return this.indexOf(str) == 0;
      };
   }
   window.addEventListener("load", onLoad, false);
}


function onLoad() {
   console.log("Antes de conectar");
   var wsUri = "ws://192.168.5.20:8080";
   websocket = new WebSocket(wsUri);
   console.log("Despues de genrar el WebSocket");
   websocket.onopen = function(evt) { onOpen(evt) };
   websocket.onclose = function(evt) { onClose(evt) };
   websocket.onmessage = function(evt) { onMessage(evt) };
   websocket.onerror = function(evt) { onError(evt) };
}

function onOpen(evt) { // Cuando se conecta
  console.log("Connected to server");
 }

function onClose(evt) { // Cuando se cierra la conexion
   console.log("Conexión cerrada");
}

function onMessage(evt) { // Mensaje recivido
   var mensaje = evt.data;
   console.log(mensaje);
   if (mensaje.startsWith("log:")) {
      mensaje = mensaje.slice("log:".length);
      console.log(mensaje);
   }else if (mensaje.startsWith("connected:")) {
      mensaje = mensaje.slice("connected:".length);
      console.log(mensaje);
   }
}

function onError(evt) {
    console.log("Evento error");
}

function addMessage() {
   var mensaje;
   websocket.send(message); // Enviar mensaje
}
