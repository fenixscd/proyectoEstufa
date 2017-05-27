function PeticionGetEstadoDispConec(conexion) {
  this.nombre      = "getEstadoDispConec";
  this.datos       = new Object();
  this.conexion    = conexion;
}

PeticionGetEstadoDispConec.prototype.getNombre = function () {
  return this.nombre;
};

PeticionGetEstadoDispConec.prototype.ejecutar = function(mac) {
  // Crear todo lo necesario para la contestacion en la lista de dispositivo
  this.datos.mac     = mac;
  this.datos.command = "clientGetEstadoDispConec";

  this.conexion.enviarMensaje(JSON.stringify(this.datos));
};
