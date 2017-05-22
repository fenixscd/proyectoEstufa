function CommandAumentarTemp(dispositivo) {
  this.dispositivo = dispositivo;
  this.nombre      = "aumentarTemp";
  this.datos       = new Object();
}

CommandAumentarTemp.prototype.getNombre = function () {
  return this.nombre;
};

CommandAumentarTemp.prototype.ejecutar = function(parametros) {
  var nTermostato = parametros["nTermostato"];
  var termostato = this.dispositivo.getTermostato(nTermostato);
  temperatura = termostato.getTemperatura();
  termostato.setTemperatura(parseFloat(temperatura) + 0.1);
};
