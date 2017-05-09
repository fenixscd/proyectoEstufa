function EnviarEstadoResistencia(dispositivo) {
  this.dispositivo = dispositivo;
  this.conexion    = dispositivo.getConexion();
  this.datos       = new Object();
}

EnviarEstadoResistencia.prototype.getNombre = function () {
  return this.nombre;
};

EnviarEstadoResistencia.prototype.ejecutar = function(parametros) {
  this.datos.mac = this.dispositivo.mac;
  this.datos.command = "setTemperatura";
  this.datos.valor = this.dispositivo.termometro.getMedicion();
  console.log("Contestacion al getTemperatura: " + this.datos);
  this.dispositivo.conexion.enviarMensaje(JSON.stringify(this.datos));
};

EnviarEstadoResistencia.prototype.ejecutar = function() {
  this.datos.mac = this.dispositivo.mac;
  this.datos.command = "setTemperatura";
  this.datos.valor = this.dispositivo.termometro.getMedicion();
  console.log("Contestacion al getTemperatura: " + this.datos);
  this.dispositivo.conexion.enviarMensaje(JSON.stringify(this.datos));
};
