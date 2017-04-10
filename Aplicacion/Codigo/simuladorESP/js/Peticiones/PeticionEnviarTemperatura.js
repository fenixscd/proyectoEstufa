function PeticionEnviarTemperatura(dispositivo, conexion) {
  this.dispositivo = dispositivo;
  this.nombre      = "getTemperatura";
  this.datos       = new Object();
}

PeticionTemperatura.prototype.getNombre = function () {
  return this.nombre;
};

PeticionTemperatura.prototype.ejecutar = function(parametros) {
  // Crear todo lo necesario para la contestacion en la lista de dispositivo
  this.comun();
  this.datos.respuesta = this.dispositivo.termometro.getMedicion();
  var resultado = this.datos;
  this.dispositivo.conexion.enviarMensaje(JSON.stringify(this.datos));
};

PeticionTemperatura.prototype.comun = function () {
  this.datos.tipoDispositivo = this.dispositivo.getTipoDispositivo();
  this.datos.mac = this.dispositivo.mac;
};
