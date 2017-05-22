function CommandCambiarEstadoTermostato(dispositivo) {
  this.dispositivo = dispositivo;
  this.nombre      = "cambiarEstadoTermostato";
  this.datos       = new Object();
}

CommandCambiarEstadoTermostato.prototype.getNombre = function () {
  return this.nombre;
};

CommandCambiarEstadoTermostato.prototype.ejecutar = function(parametros) {
  var nTermostato = parametros["nTermostato"];
  var estado      = parametros["estado"];
  var termostato  = this.dispositivo.getTermostato(nTermostato);

  termostato.setEstado(estado);
};
