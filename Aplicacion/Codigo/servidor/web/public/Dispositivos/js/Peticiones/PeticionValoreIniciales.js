function PeticionValoreIniciales(conexion) {
  this.nombre      = "valoresInciales";
  this.datos       = new Object();
  this.conexion    = conexion;
}

PeticionValoreIniciales.prototype.getNombre = function () {
  return this.nombre;
};

PeticionValoreIniciales.prototype.ejecutar = function(mac) {
  // Crear todo lo necesario para la contestacion en la lista de dispositivo
  this.datos.mac     = mac;
  this.datos.command = "serverValoresInciales";

  this.conexion.enviarMensaje(JSON.stringify(this.datos));
};
