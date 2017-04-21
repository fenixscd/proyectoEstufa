function CommandRegistrar(commandsLista) {
  this.commandsLista = commandsLista;
  this.nombre      = "registrar";
  this.datos       = new Object();
}

CommandRegistrar.prototype.getNombre = function () {
  return this.nombre;
};

CommandRegistrar.prototype.ejecutar = function(dispositivo) {
  // Crear todo lo necesario para la contestacion en la lista de dispositivo
  this.datos.command = "registrar";
  this.datos.tipoDispositivo = dispositivo.getTipoDispositivo();
  this.datos.mac = dispositivo.mac;
  dispositivo.conexion.enviarMensaje(JSON.stringify(this.datos));
};
