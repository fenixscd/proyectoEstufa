function Conexion(esp8266){
  this.esp8266 = esp8266;
  this.mac = esp8266.getMac();
}

Conexion.prototype.enviar = function (clave, valor) {
  var msg ={"members":this.mac, "datos":{}};
  msg.datos[clave]:valor;
  console.log();
};

Conexion.prototype.recivir = function () {

};
