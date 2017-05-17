function PeticionAumentarTemp(conexion) {
  this.nombre      = "aumentarTemp";
  this.datos       = new Object();
  this.conexion    = conexion;
}

PeticionAumentarTemp.prototype.getNombre = function () {
  return this.nombre;
};

PeticionAumentarTemp.prototype.ejecutar = function(mac, nTermostato) {
  // Crear todo lo necesario para la contestacion en la lista de dispositivo
  this.datos.mac         = mac;
  this.datos.nTermostato = nTermostato;
  this.datos.repetir     = "aumentarTemp"
  this.datos.command     = "dispRepetir";

  //console.log(this.datos);

  this.conexion.enviarMensaje(JSON.stringify(this.datos));
};
