function CommandDisminuirTemp(dispositivo) {
  this.dispositivo = dispositivo;
  this.nombre      = "disminuirTemp";
  this.datos       = new Object();
}

CommandDisminuirTemp.prototype.getNombre = function () {
  return this.nombre;
};

CommandDisminuirTemp.prototype.ejecutar = function(parametros) {
  var nTermostato = parametros["nTermostato"];
  var termostato = this.dispositivo.getTermostato(nTermostato);
  temperatura = termostato.getTemperatura();
  termostato.setTemperatura(parseFloat(temperatura) - 0.1);
};
