function Sensores() {
  this.listaSensores = new Array();
}

Sensores.prototype.addSensor = function (nuevoDispositivo) {
  this.listaSensores.push(nuevoDispositivo);
  console.log("Total elementos: "+this.listaSensores.length);
  return nuevoDispositivo;
};

Sensores.prototype.getTotalSensores = function () {
  return this.listaSensores.length;
};
