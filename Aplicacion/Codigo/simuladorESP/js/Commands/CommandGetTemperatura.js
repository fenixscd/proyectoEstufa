function CommandGetTemperatura(dispositivo) {
  this.dispositivo = dispositivo;
  this.nombre      = "getTermometro";
  this.datos       = new Object();
}

CommandGetTemperatura.prototype.getNombre = function () {
  return this.nombre;
};

CommandGetTemperatura.prototype.ejecutar = function(parametros) {
  // Crear todo lo necesario para la contestacion en la lista de dispositivo

  if (parametros.codigoPeticion == undefined){
    parametros.codigoPeticion = "";
  }
  this.datos.mac = this.dispositivo.mac;
  this.datos.respuesta = this.dispositivo.termometro.getMedicion();
  this.datos.command = "setTermometro";
  this.dispositivo.conexion.enviarMensaje(JSON.stringify(this.datos));
};
