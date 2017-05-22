function PeticionCambiarEstadoTermostato(conexion) {
  this.nombre      = "cambiarEstadoTermostato";
  this.datos       = new Object();
  this.conexion    = conexion;
}

PeticionCambiarEstadoTermostato.prototype.getNombre = function () {
  return this.nombre;
};

PeticionCambiarEstadoTermostato.prototype.ejecutar = function(mac, nTermostato, estado) {

  this.datos.mac         = mac;
  this.datos.nTermostato = nTermostato;
  this.datos.estado      = estado;
  this.datos.repetir     = "cambiarEstadoTermostato"
  this.datos.command     = "dispRepetir";

  this.conexion.enviarMensaje(JSON.stringify(this.datos));
};
