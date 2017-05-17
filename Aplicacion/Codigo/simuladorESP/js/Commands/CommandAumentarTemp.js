function CommandAumentarTemp(dispositivo) {
  this.dispositivo = dispositivo;
  this.nombre      = "aumentarTemp";
  this.datos       = new Object();
}

CommandAumentarTemp.prototype.getNombre = function () {
  return this.nombre;
};

CommandAumentarTemp.prototype.ejecutar = function(parametros) {
  console.log("Parametros aumentarTemp \n");
  console.log(parametros);
  var nTermostato = parametros["nTermostato"];
  var termostato = this.dispositivo.getTermostato(nTermostato);
  console.log("Termostato \n");
  console.log(termostato);
  temperatura = termostato.getTemperatura();
  termostato.setTemperatura(parseFloat(temperatura) + 0.1);
};
