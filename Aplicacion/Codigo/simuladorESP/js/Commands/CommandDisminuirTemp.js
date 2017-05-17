function CommandDisminuirTemp(dispositivo) {
  this.dispositivo = dispositivo;
  this.nombre      = "disminuirTemp";
  this.datos       = new Object();
}

CommandGetTemperatura.prototype.getNombre = function () {
  return this.nombre;
};

CommandGetTemperatura.prototype.ejecutar = function(parametros) {
  var nTermostato = parametros["nTermostato"];
  var termostato = this.dispositivo.getTermostato(nTermostato);
  termostato.setTemperatura(parseFloat(termostato.temperatura) - 0.1);
};
