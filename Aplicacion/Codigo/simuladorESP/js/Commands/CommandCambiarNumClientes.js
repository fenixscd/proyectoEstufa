function CommandCambiarNumClientes(dispositivo) {
  this.dispositivo = dispositivo;
  this.nombre      = "cambiarNumClientes";
  this.datos       = new Object();
}

CommandCambiarNumClientes.prototype.getNombre = function () {
  return this.nombre;
};

CommandCambiarNumClientes.prototype.ejecutar = function(parametros) {
  var numClientes = parametros["valor"];
  this.dispositivo.setNumClientes(numClientes);
};
