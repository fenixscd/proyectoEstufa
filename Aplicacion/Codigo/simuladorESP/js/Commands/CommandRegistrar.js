function CommandRegistrar(dispositivo) {
  this.dispositivo = dispositivo;
  this.nombre      = "registrarDispositivo";
  this.datos       = new Object();
}

CommandRegistrar.prototype.getNombre = function () {
  return this.nombre;
};

CommandRegistrar.prototype.ejecutar = function(parametros) {
  // Crear todo lo necesario para la contestacion en la lista de dispositivo
  this.datos.command = "registrarDispositivo";
  this.datos.tipoDispositivo = this.dispositivo.getTipoDispositivo();
  this.datos.mac = this.dispositivo.mac;
  this.dispositivo.conexion.enviarMensaje(JSON.stringify(this.datos));
};
