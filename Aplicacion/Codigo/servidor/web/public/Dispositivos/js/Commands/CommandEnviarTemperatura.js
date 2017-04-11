function CommandEnviarTemperatura(dispositivo) {
  this.dispositivo = dispositivo;
  this.nombre      = "enviarTemperatura";
  this.datos       = new Object();
}

CommandEnviarTemperatura.prototype.getNombre = function () {
  return this.nombre;
};

CommandEnviarTemperatura.prototype.ejecutar = function(parametros) {
  // Crear todo lo necesario para la contestacion en la lista de dispositivo
  this.comun();
  this.datos.respuesta = this.dispositivo.termometro.getMedicion();
  this.dispositivo.conexion.enviarMensaje(JSON.stringify(this.datos));
  parametros;
};

CommandEnviarTemperatura.prototype.comun = function () {
  this.datos.tipoDispositivo = this.dispositivo.getTipoDispositivo();
  this.datos.mac = this.dispositivo.mac;
};
