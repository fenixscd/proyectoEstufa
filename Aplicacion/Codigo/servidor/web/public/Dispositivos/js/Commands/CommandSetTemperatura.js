function CommandSetTemperatura(listaDispositivos) {
  this.listaDispositivos = listaDispositivos;
  this.nombre            = "setTemperatura";
}

CommandSetTemperatura.prototype.getNombre = function () {
  return this.nombre;
};

CommandSetTemperatura.prototype.ejecutar = function(parametros) {
  console.log("Comando "+ setNombreDispositivo + " parametros " + parametros);
  var mac         = parametros["mac"];
  var clave       = "temperatura";
  var valor       = parametros["valor"];

  this.listaDispositivos.cambiarValor(mac, clave, valor);
};
