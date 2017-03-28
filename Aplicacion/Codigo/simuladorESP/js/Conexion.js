function Conexion(esp8266, display){
  this.esp8266 = esp8266;
  this.mac = esp8266.getMac();


  this.urlServidor = "ws://192.168.5.20:8080";
  this.websocket;


  // websocket.send(" -2 Mensaje- ");
  //websocket.send("Hola desde el cliente")
  //this.enviarAlgo();
  //this.websocket.send("Hestoy conectado"); // Enviar mensaje
  // console.log(urlServidor);
  // console.log(websocket);

  this.iniciar(this);
}

Conexion.prototype.mesaaaaa = function () {
  console.log("Llama a mesaaaaaa");
  this.websocket.send("Conecto");
};

Conexion.prototype.iniciar = function (_this) {
  this.websocket = new WebSocket(this.urlServidor);
  this.websocket.onopen = function(evt) {
    console.log(_this.websocket);
    _this.mesaaaaa();
    // _this.websocket.send("Conecto");
  };


  this.websocket.onclose = function(evt) { console.log("Conexion cerrada") };
  this.websocket.onmessage = function(evt) { console.log("Entrad de mensaje") };
  this.websocket.onerror = function(evt) { console.log("Evento de error") };
};






Conexion.prototype.onOpen = function (evt) {
  console.log("Conexion avierta " + esp8266.getMac());
};

Conexion.prototype.enviarAlgo = function () {
  this.getWebsocket().send(" HOtro mensaje ");
};


// Conexion.prototype.conectar = function () {
//   console.log("Antes de conectar");
//   this.urlServidor = "ws://192.168.5.20:8080";
//   this.websocket = new WebSocket(this.urlServidor);
//   console.log("Despues de genrar el WebSocket");
//   this.VerificarWebSocket();
//   this.websocket.send("Hestoy conectado"); // Enviar mensaje
// };
//
// Conexion.prototype.VerificarWebSocket = function () {
//   if (this.websocket === undefined) {
//     console.log("Socket no soportado");
//   }else {
//     console.log("Conectado al servidor");
//     var message = "Hola caracola";
//     this.websocket.send(message); // Enviar mensaje
//   }
// };
//
// this.websocket.onopen = function(evt) { // Cuando se conecta
//   console.log("Evento conectado al servidor");
// };
// this.Websocket.onclose = function(evt) { // Cuando se cierra la conexion
//   console.log("Evento conexion cerrada");
// };
// this.Websocket.onmessage = function(evt) { // Recivido mensaje
//   console.log("Evento mensaje recivido");
// };
// this.Websocket.onerror = function(evt) { // Evento de error
//   console.log("Evento de error");
// };


// this.websocket.onopen = function(evt) { onOpen(evt) }; // Cuando se conecta
// this.websocket.onclose = function(evt) { onClose(evt) }; // Cuando se cierra la conexion
// this.websocket.onmessage = function(evt) { onMessage(evt) }; // Recivido mensaje
// this.websocket.onerror = function(evt) { onError(evt) }; // Evento de error

// Conexion.prototype.enviar = function () {
//   var message = "Hola caracola";
//   this.websocket.send(message); // Enviar mensaje
// };


//
// Conexion.prototype.recivir = function () {
//
// };
//

//
//
//
// // if (window.WebSocket === undefined) {
// //   console.log("Socket no soportado");
// // }else {
// //    if (typeof String.prototype.startsWith != "function") {
// //       String.prototype.startsWith = function (str) {
// //       return this.indexOf(str) == 0;
// //       };
// //    }
// //    window.addEventListener("load", onLoad, false);
// // }
//
// //
// // function onLoad() {
// //    console.log("Antes de conectar");
// //    var wsUri = "ws://192.168.5.20:8080";
// //    websocket = new WebSocket(wsUri);
// //    console.log("Despues de genrar el WebSocket");
// //    websocket.onopen = function(evt) { onOpen(evt) };
// //    websocket.onclose = function(evt) { onClose(evt) };
// //    websocket.onmessage = function(evt) { onMessage(evt) };
// //    websocket.onerror = function(evt) { onError(evt) };
// // }
//
// function onOpen(evt) { // Cuando se conecta
//   console.log("Conexion establecida");
//  }
//
// function onClose(evt) { // Cuando se cierra la conexion
//    console.log("Conexión cerrada");
// }
//
// function onMessage(evt) { // Mensaje recivido
//    var mensaje = evt.data;
//    console.log(mensaje);
//    if (mensaje.startsWith("log:")) {
//       mensaje = mensaje.slice("log:".length);
//       console.log(mensaje);
//    }else if (mensaje.startsWith("connected:")) {
//       mensaje = mensaje.slice("connected:".length);
//       console.log(mensaje);
//    }
// }
//
// function onError(evt) {
//     console.log("Evento error");
// }
//
// function addMessage() {
//    var mensaje;
//    websocket.send(message); // Enviar mensaje
// }

Conexion.prototype.temporizdor = function (msg) {
  this.getWebsocket().send(msg +"\n");
};


///////////////////////////////////////
Conexion.prototype.enviar = function (msg) {
  //console.log(this.getUrlServidor());

  //this.getWebsocket().send(msg +"\n");
  var ejecutar = function(){
    //this.getWebsocket().send(msg +"\n");
  }
  setTimeout(function(){
    ejecutar();
  } , 500);

};

Conexion.prototype.enviarDatos = function(clave, valor) {
	var enviar = "Dispositivo " + this.mac + ": " + clave + " " + valor;
	this.enviar(enviar);
  //this.getWebsocket().send(enviar);
};
