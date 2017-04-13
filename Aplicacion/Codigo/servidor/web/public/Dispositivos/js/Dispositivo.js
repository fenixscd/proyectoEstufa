function Dispositivo(mac, peticionesLista){
  this.mac             = mac;
  this.display         = new Display(this.mac);
  this.peticionesLista = peticionesLista;
  this.buclePeticiones(this);
}

Dispositivo.prototype.getMac = function () {
  this.mac;
};

Dispositivo.prototype.ejecutar = function () {

};

Dispositivo.prototype.buclePeticiones = function (obj) {
    window.setInterval(function() {
      obj.peticionesLista.getPeticion("getTemperatura").ejecutar(obj.mac);
    }, 1000);
};

Dispositivo.prototype.cargarPeticiones = function () {

};
