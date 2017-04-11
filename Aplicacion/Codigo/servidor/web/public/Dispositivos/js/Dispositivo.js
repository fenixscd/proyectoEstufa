function Dispositivo(mac){
  this.mac = mac;
  this.conexion = new Conexion(this.mac);
}

Dispositivo.prototype.getMac = function () {
  this.mac;
};
