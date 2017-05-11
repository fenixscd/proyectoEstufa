function CommandSetTempTermostato2(listaDispositivos) {
  this.listaDispositivos = listaDispositivos;
  this.nombre            = "setTempTermostato2";
}

CommandSetTempTermostato2.prototype.getNombre = function () {
  return this.nombre;
};

CommandSetTempTermostato2.prototype.ejecutar = function(parametros) {
  console.log("Comando "+ setNombreDispositivo + " parametros " + parametros);
  var mac         = parametros["mac"];
  var clave       = "tempTermostato2";
  var valor       = parametros["valor"];

  this.listaDispositivos.cambiarValor(mac, clave, valor);
};
