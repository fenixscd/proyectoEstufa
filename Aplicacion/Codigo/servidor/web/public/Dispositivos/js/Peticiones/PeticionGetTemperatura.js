function PeticionGetTemperatura(conexion) {
  this.nombre      = "getTemperatura";
  this.datos       = new Object();
  this.conexion    = conexion;
}

PeticionGetTemperatura.prototype.getNombre = function () {
  return this.nombre;
};

PeticionGetTemperatura.prototype.ejecutar = function(mac) {
  // Crear todo lo necesario para la contestacion en la lista de dispositivo
  this.datos.mac             = mac;
  this.datos.command         = "getTemperatura"; // Comando que se ejecuta en el servidor
  this.datos.codigoPeticion  = "codigoDePeticion";

  this.conexion.enviarMensaje(JSON.stringify(this.datos));
};
