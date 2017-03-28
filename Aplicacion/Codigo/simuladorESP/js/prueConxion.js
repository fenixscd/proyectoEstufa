

var mysocket = new WebSocket("ws://192.168.5.20:8080");
mysocket.onopen = function (evt){
   escribir("Websocket abierto");
   mysocket.send(" -Primer envio- ");
};

mysocket.onmessage = function (evt){
  escribir("RECIBIDO: " + evt.data);
};

mysocket.onclose = function (evt){
  escribir("Websocket cerrado");
};

mysocket.onerror = function (evt) {
  escribir("ERROR: " + evt.data);
}

function escribir(texto){
  console.log(texto);
}


var temporizador = setTimeout(function(){
  mysocket.send(" -Segundo envio- ");
} , 5000);
