function CommandSetEstadoResitencia1(listaDispositivos) {
  this.listaDispositivos = listaDispositivos;
  this.nombre            = "setEstadoResitencia1";
}

CommandSetEstadoResitencia1.prototype.getNombre = function () {
  return this.nombre;
};

CommandSetEstadoResitencia1.prototype.ejecutar = function(parametros) {
  var mac         = parametros["mac"];
  var clave       = "estadoResitencia1";
  var valor       = parametros["valor"];

  this.listaDispositivos.cambiarValor(mac, clave, valor);
};
