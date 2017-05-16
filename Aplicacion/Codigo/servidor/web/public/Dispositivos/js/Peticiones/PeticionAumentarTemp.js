function PeticionAumentarTemp(conexion) {
  this.nombre      = "aumentarTemp";
  this.datos       = new Object();
  this.conexion    = conexion;
}

PeticionAumentarTemp.prototype.getNombre = function () {
  return this.nombre;
};

PeticionAumentarTemp.prototype.ejecutar = function(mac, termostato) {
  // Crear todo lo necesario para la contestacion en la lista de dispositivo
  this.datos.mac      = mac;
  this.datos.command = "aumentarTemp"+termostato; // Comando que se ejecuta en el servidor
  this.datos.codigo  = "codigoDePeticion";

  //console.log(this.datos);

  this.conexion.enviarMensaje(JSON.stringify(this.datos));
};
