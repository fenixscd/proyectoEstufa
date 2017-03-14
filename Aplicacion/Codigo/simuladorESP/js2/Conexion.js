function Conexion(esp8266){
  this.esp8266 = esp8266;
  this.mac = esp8266.getMac();
}

Conexion.prototype.enviar = function () {
  
  console.log("Enviar datos: " + this.mac);
};

Conexion.prototype.recivir = function () {

};
