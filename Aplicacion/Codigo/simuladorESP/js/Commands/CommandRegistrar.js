function CommandEnviarTemperatura() {
  this.nombre      = "registrar";
  this.datos       = new Object();
}

CommandEnviarTemperatura.prototype.getNombre = function () {
  return this.nombre;
};

CommandEnviarTemperatura.prototype.ejecutar = function(dispositivo) {
  // Crear todo lo necesario para la contestacion en la lista de dispositivo
  this.comun();
  dispositivo.conexion.enviarMensaje(JSON.stringify(this.datos));
};

CommandEnviarTemperatura.prototype.comun = function () {
  this.datos.tipoDispositivo = dispositivo.getTipoDispositivo();
  this.datos.mac = dispositivo.mac;
};
