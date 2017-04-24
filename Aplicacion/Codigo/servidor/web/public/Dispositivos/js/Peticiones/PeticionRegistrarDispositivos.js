function PeticionRegistrarDispositivos(conexion) {
  this.nombre      = "registrarDispositivo";
  this.datos       = new Object();
  this.conexion    = conexion;
}

PeticionRegistrarDispositivos.prototype.getNombre = function () {
  return this.nombre;
};

PeticionRegistrarDispositivos.prototype.ejecutar = function(mac) {
  // Crear todo lo necesario para la contestacion en la lista de dispositivo
  this.datos.mac     = mac;
  this.datos.command = "registrarDispositivoCliente"; // Comando que se ejecuta en el servidor
  this.datos.codigo  = "codigoDePeticion";

  this.conexion.enviarMensaje(JSON.stringify(this.datos));
};
