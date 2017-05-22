function PeticionDisminuirTemp(conexion) {
  this.nombre      = "disminuirTemp";
  this.datos       = new Object();
  this.conexion    = conexion;
}

PeticionDisminuirTemp.prototype.getNombre = function () {
  return this.nombre;
};

PeticionDisminuirTemp.prototype.ejecutar = function(mac, nTermostato) {
  // Crear todo lo necesario para la contestacion en la lista de dispositivo
  this.datos.mac         = mac;
  this.datos.nTermostato = nTermostato;
  this.datos.repetir     = "disminuirTemp"
  this.datos.command     = "dispRepetir";
  // console.log(this.datos);

  this.conexion.enviarMensaje(JSON.stringify(this.datos));
};
