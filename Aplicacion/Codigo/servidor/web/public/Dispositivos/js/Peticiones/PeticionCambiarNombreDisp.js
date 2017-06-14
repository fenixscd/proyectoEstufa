function PeticionCambiarNombreDisp(conexion) {
  this.nombre      = "cambiarNombreDisp";
  this.datos       = new Object();
  this.conexion    = conexion;
}

PeticionCambiarNombreDispositivo.prototype.getNombre = function () {
  return this.nombre;
};

PeticionCambiarNombreDispositivo.prototype.ejecutar = function(mac, nombre) {
  // Crear todo lo necesario para la contestacion en la lista de dispositivo
  console.log("Llama al comando cambiar nobre disp ");
  this.datos.mac     = mac;
  this.datos.nombre  = nombre;
  this.datos.command = "dispRepetir"; // Comando que se ejecuta en el servidor
  this.datos.repetir = "cambiarNombreDispositivo"

  // console.log(this.datos);
  this.conexion.enviarMensaje(JSON.stringify(this.datos));
};
