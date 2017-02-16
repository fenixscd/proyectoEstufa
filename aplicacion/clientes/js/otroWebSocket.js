connected = document.getElementById("connected");
log = document.getElementById("log");
chat = document.getElementById("chat");
form = chat.form;
state = document.getElementById("status");

if (window.WebSocket === undefined) {
   state.innerHTML = "Socket no soportado";
   state.className = "fail";
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
   var wsUri = "ws://192.168.5.10:8080";
   websocket = new WebSocket(wsUri);
   console.log("Despues de genrar el WebSocket");
   websocket.onopen = function(evt) { onOpen(evt) };
   websocket.onclose = function(evt) { onClose(evt) };
   websocket.onmessage = function(evt) { onMessage(evt) };
   websocket.onerror = function(evt) { onError(evt) };
}

function onOpen(evt) {
   state.className = "success";
   state.innerHTML = "Connected to server";
 }

function onClose(evt) {
   state.className = "fail";
   state.innerHTML = "Not connected";
   connected.innerHTML = "0";
}

function onMessage(evt) {
   // Existen dos tipos de mensajes:
   // 1. un mensaje de participante de chat en sí mismo
   // 2. un mensaje con un número de participantes de chat conectados
   var message = evt.data;

   if (message.startsWith("log:")) {
      message = message.slice("log:".length);
      log.innerHTML = '<li class = "message" "izq">' + message + "</li>" + log.innerHTML;
   }else if (message.startsWith("connected:")) {
      message = message.slice("connected:".length);
      connected.innerHTML = message;
   }
}

function onError(evt) {
    console.log("Evento error");
   state.className = "fail";
   state.innerHTML = "Communication error";
}

function addMessage() {
   var message = chat.value;
   chat.value = "";
   log.innerHTML = '<li class = "message" "der">' + message + "</li>" + log.innerHTML;
   websocket.send(message);
}
