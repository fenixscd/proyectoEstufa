function PeticionDisminuirTemp(conexion) {
  this.nombre      = "disminuirTemp";
  this.datos       = new Object();
  this.conexion    = conexion;
}

PeticionDisminuirTemp.prototype.getNombre = function () {
  return this.nombre;
};

PeticionDisminuirTemp.prototype.ejecutar = function(mac, termostato) {
  // Crear todo lo necesario para la contestacion en la lista de dispositivo
  this.datos.mac      = mac;
  this.datos.command = "disminuirTemp"+termostato; // Comando que se ejecuta en el servidor
  this.datos.codigo  = "codigoDePeticion";
  // console.log(this.datos);

  this.conexion.enviarMensaje(JSON.stringify(this.datos));
};
