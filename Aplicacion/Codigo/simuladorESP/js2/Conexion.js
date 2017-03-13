function Conexion(mac){
  this.mac = mac;
}

Conexion.prototype.enviar = function (clave, valor) {
  var msg ={"members":this.mac, "datos":{}};
  msg.datos[clave]:valor;
  console.log();
};

Conexion.prototype.recivir = function () {

};
