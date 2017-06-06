function PeticionListaDispo(conexion) {
  this.nombre      = "solicitarListaDispo";
  this.datos       = new Object();
  this.conexion    = conexion;
}

PeticionCambiarNombreDispositivo.prototype.getNombre = function () {
  return this.nombre;
};

PeticionCambiarNombreDispositivo.prototype.ejecutar = function(nombre) {
  // Crear todo lo necesario para la contestacion en la lista de dispositivo
  this.datos.nombre  = nombre;
  this.datos.command = "clientGenerarDisp"; // Comando que se ejecuta en el servidor

  // console.log(this.datos);
  this.conexion.enviarMensaje(JSON.stringify(this.datos));
};
