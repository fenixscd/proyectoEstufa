function PeticionCambiarNombreDispositivo(conexion) {
  this.nombre      = "cambiarNombreDispositivo";
  this.datos       = new Object();
  this.conexion    = conexion;
}

PeticionCambiarNombreDispositivo.prototype.getNombre = function () {
  return this.nombre;
};

PeticionCambiarNombreDispositivo.prototype.ejecutar = function(mac, nombre) {
  // Crear todo lo necesario para la contestacion en la lista de dispositivo
  this.datos.mac     = mac;
  this.datos.nombre  = nombre;
  this.datos.command = "cambiarNombreDispositivo"; // Comando que se ejecuta en el servidor
  this.datos.codigo  = "codigoDePeticion";
  console.log(this.datos);

  // this.conexion.enviarMensaje(JSON.stringify(this.datos));
};
