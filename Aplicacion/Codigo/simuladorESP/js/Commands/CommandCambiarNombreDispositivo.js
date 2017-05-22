function CommandCambiarNombreDispositivo(dispositivo) {
  this.dispositivo = dispositivo;
  this.nombre      = "cambiarNombreDispositivo";
  this.datos       = new Object();
}

CommandCambiarNombreDispositivo.prototype.getNombre = function () {
  return this.nombre;
};

CommandCambiarNombreDispositivo.prototype.ejecutar = function(parametros) {
  var nombre = parametros["nombre"];
  this.dispositivo.setNombre(nombre);
};
