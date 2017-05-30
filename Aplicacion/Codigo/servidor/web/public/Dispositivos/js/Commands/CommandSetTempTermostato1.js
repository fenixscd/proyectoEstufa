function CommandSetTempTermostato1(listaDispositivos) {
  this.listaDispositivos = listaDispositivos;
  this.nombre            = "setTempTermostato1";
}

CommandSetTempTermostato1.prototype.getNombre = function () {
  return this.nombre;
};

CommandSetTempTermostato1.prototype.ejecutar = function(parametros) {
  var mac         = parametros["mac"];
  var clave       = "tempTermostato1";
  var valor       = parametros["valor"];

  this.listaDispositivos.cambiarValor(mac, clave, valor);
};
