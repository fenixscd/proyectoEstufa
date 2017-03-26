function Conexion(esp8266, display){
  this.esp8266 = esp8266;
  this.mac = esp8266.getMac();
}

Conexion.prototype.enviar = function (msg) {

  console.log("Enviar datos: " + msg);
};

Conexion.prototype.recivir = function () {

};

Conexion.prototype.enviarDatos = function(clave, valor) {
	var enviar = "Dispositivo " + this.mac + ": " + clave + " " + valor;
	this.enviar(enviar);
};
