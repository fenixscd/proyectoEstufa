function CommandGetTemperatura(dispositivo) {
  this.dispositivo = dispositivo;
  this.nombre      = "getTemperatura";
  this.datos       = new Object();
}

CommandGetTemperatura.prototype.getNombre = function () {
  return this.nombre;
};

CommandGetTemperatura.prototype.ejecutar = function(parametros) {
  this.datos.command = "setTemperatura";
  this.datos.valor = this.dispositivo.termometro.getMedicion();
  this.dispositivo.conexion.enviarMensaje(this.datos);
};
