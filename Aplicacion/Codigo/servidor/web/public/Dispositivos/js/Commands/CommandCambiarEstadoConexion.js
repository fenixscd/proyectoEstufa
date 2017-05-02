function CommandCambiarEstadoConexion(listaDispositivos) {
  this.listaDispositivos = listaDispositivos;
  this.nombre            = "cambiarEstadoConexion";
  this.datos             = new Object();
}

CommandCambiarEstadoConexion.prototype.getNombre = function () {
  return this.nombre;
};

CommandCambiarEstadoConexion.prototype.ejecutar = function(parametros) {
  this.listaDispositivos.cambiarEstado(parametros);
};
