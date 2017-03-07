function Dispositivo(){
  this.resistencia1 = new Resistencia(1);
  this.resistencia2 = new Resistencia(2);
  this.estufa = new Estufa(this.resistencia1, this.resistencia2);

  function bucle (obj){
    window.setTimeout(function() {
      bucle(obj);
    }, 2000);
    obj.estufa.cambiarMediciones();
    // obj.estufa.pintarDatosConsola();
    console.log(obj.getJson());

  }
  bucle(this);
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


Dispositivo.prototype.getJson = function () {
  return {
    "estufa" : this.estufa.getJson(),
    "resistencia1":this.resistencia1.getJson(),
    "resistencia2":this.resistencia2.getJson()
  };
};

Dispositivo.prototype.pintarDispositivo = function (plantilla) {

};

Dispositivo.prototype.parsearParaPintar = function () {

};
