function CommandSetEstadoResitencia2(listaDispositivos) {
  this.listaDispositivos = listaDispositivos;
  this.nombre            = "setEstadoResitencia2";
}

CommandSetEstadoResitencia2.prototype.getNombre = function () {
  return this.nombre;
};

CommandSetEstadoResitencia2.prototype.ejecutar = function(parametros) {
  var mac         = parametros["mac"];
  var clave       = "estadoResitencia2";
  var valor       = parametros["valor"];

  this.listaDispositivos.cambiarValor(mac, clave, valor);
};
