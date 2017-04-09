function GetTemperaturaComand(dispositivo) {
  this.nombre      = getTemperatura;
  this.dispositivo = dispositivo;
}

GetTemperaturaComand.prototype.getNombre = function () {
  return this.nombre;
};

GetTemperaturaComand.prototype.ejecutar = function () {
  return this.dispositivo.termometro.getTemperatura();
};
