function PeticionCambiarEstadoTermostato(conexion) {
  this.nombre      = "cambiarEstadoTermostato";
  this.datos       = new Object();
  this.conexion    = conexion;
}

PeticionCambiarEstadoTermostato.prototype.getNombre = function () {
  return this.nombre;
};

PeticionCambiarEstadoTermostato.prototype.ejecutar = function(mac, termostato, estado) {
  // Crear todo lo necesario para la contestacion en la lista de dispositivo
  this.datos.mac     = mac;
  this.datos.estado  = estado;
  this.datos.command = "cambiarEstadoTermostato"+termostato; // Comando que se ejecuta en el servidor
  this.datos.codigo  = "codigoDePeticion";
  console.log(this.datos);

  // this.conexion.enviarMensaje(JSON.stringify(this.datos));
};
