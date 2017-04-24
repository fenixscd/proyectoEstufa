function CommandEnviarTemperatura(dispositivo) {
  this.dispositivo = dispositivo;
  this.nombre      = "enviarTemperatura";
  this.datos       = new Object();
}

CommandEnviarTemperatura.prototype.getNombre = function () {
  return this.nombre;
};

CommandEnviarTemperatura.prototype.ejecutar = function(parametros) {
  // Crear todo lo necesario para la contestacion en la lista de dispositivo

  if (parametros.codigoEnvio == undefined){
    parametros.codigoEnvio = "Sin Codigo de Envio";
  }
  console.log("Codigo Envio " + parametros.codigoEnvio);
  this.datos.mac = this.dispositivo.mac;
  this.datos.respuesta = this.dispositivo.termometro.getMedicion();
  this.datos.command = "getTemperatura";
  this.dispositivo.conexion.enviarMensaje(JSON.stringify(this.datos));
};
