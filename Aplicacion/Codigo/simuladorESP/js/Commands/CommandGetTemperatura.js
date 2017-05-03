function CommandGetTemperatura(dispositivo) {
  this.dispositivo = dispositivo;
  this.nombre      = "getTemperatura";
  this.datos       = new Object();
}

CommandGetTemperatura.prototype.getNombre = function () {
  return this.nombre;
};

CommandGetTemperatura.prototype.ejecutar = function(parametros) {
  this.datos.mac = this.dispositivo.mac;
  this.datos.command = "setTemperatura";
  this.datos.valor = this.dispositivo.termometro.getMedicion();
  console.log("Contestacion al getTemperatura: " + this.datos);
  this.dispositivo.conexion.enviarMensaje(JSON.stringify(this.datos));
};
