function Dispositivo(){
  this.resistencia1 = new Resistencia();
  this.resistencia2 = new Resistencia();
  this.estufa = new Estufa(this.resistencia1, this.resistencia2);

  function bucle (obj){
    window.setTimeout(function() {
      bucle(obj);
    }, 2000);
    obj.cambiarMediciones();
    obj.pintarDatosConsola();
  }
  bucle(this.estufa);
}

Dispositivo.prototype.isMacEquals = function (mac) {
  if (this.estufa.GetMac() === mac){
    return true;
  }
  return false;
};

Dispositivo.prototype.GetMac = function() {
  return this.estufa.GetMac();
};

Dispositivo.prototype.getEstufa = function () {
  return this.estufa;
};

// Jenerar los datos que se van a pintar en formato JSON
Dispositivo.prototype.getJsonPintar = function () {

};

Dispositivo.prototype.pintarDispositivo = function (plantilla) {

};

Dispositivo.prototype.parsearParaPintar = function () {

};
