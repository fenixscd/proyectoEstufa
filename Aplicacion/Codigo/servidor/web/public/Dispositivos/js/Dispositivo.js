function Dispositivo(mac){
  this.mac = mac;
  this.display = new Display(this.mac);
}

Dispositivo.prototype.getMac = function () {
  this.mac;
};
