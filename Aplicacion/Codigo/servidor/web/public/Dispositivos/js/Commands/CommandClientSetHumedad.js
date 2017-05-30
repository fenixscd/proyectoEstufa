function CommandClientSetHumedad(listaDispositivos) {
  this.listaDispositivos = listaDispositivos;
  this.nombre            = "clientSetHumedad";
}

CommandClientSetHumedad.prototype.getNombre = function () {
  return this.nombre;
};

CommandClientSetHumedad.prototype.ejecutar = function(parametros) {
  var mac         = parametros["mac"];
  var clave       = "humedad";
  var valor       = parametros["valor"];

  this.listaDispositivos.cambiarValor(mac, clave, valor);
};
