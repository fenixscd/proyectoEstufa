function CommandEnviarValoresActuales(dispositivo) {
  this.dispositivo = dispositivo;
  this.nombre      = "enviarValoresActuales";
  this.datos       = new Object();
}

CommandEnviarValoresActuales.prototype.getNombre = function () {
  return this.nombre;
};

CommandEnviarValoresActuales.prototype.ejecutar = function(parametros) {
  if (this.dispositivo.isClientesConectados()){
    this.dispositivo.enviarTodosLosValores();
  }
};
