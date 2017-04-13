function CommandSolicitarTemperatura(conexion) {
  this.dispositivo = dispositivo;
  this.nombre      = "solicitarTemperatura";
  this.datos       = new Object();
}

CommandSolicitarTemperatura.prototype.getNombre = function () {
  return this.nombre;
};

CommandSolicitarTemperatura.prototype.ejecutar = function(parametros) {
  // Crear todo lo necesario para la contestacion en la lista de dispositivo
  this.datos.mac = this.dispositivo.getMac();
  this.datos.command = "solicitarTemperatura"; // Comando que se ejecuta en el servidor
  this.datos.codigo = "codigoDePeticion";
  this.conexion.enviarMensaje(JSON.stringify(this.datos));
};
