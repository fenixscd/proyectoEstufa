function PeticionTemperatura(dispositivo, conexion, encabezado) {
  this.nombre      = getTemperatura;
  this.dispositivo = dispositivo;
}

PeticionTemperatura.prototype.getNombre = function () {
  return this.nombre;
};

PeticionTemperatura.prototype.ejecutar = function () {
  // Crear todo lo necesario para la contestacion en la lista de dispositivo
  var contestacion = this.encabezado +
      'temperatura:'+ this.dispositivo.termometro.getTemperatura() +
      this.pie();

  console.log(contestacion);
};


PeticionTemperatura.prototype.encabezado = function () {
  return '{'+
    'tipoDispositivo:' + this.dispositivo.getTipoDispositivo() +','+
    'mac:'+this.dispositivo.getMac() + ',';
};

PeticionTemperatura.prototype.pie = function () {
    return '}';
};
