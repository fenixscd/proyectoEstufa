function CommandClientSetTermostatoTemp(listaDispositivos) {
  this.listaDispositivos = listaDispositivos;
  this.nombre            = "clientSetTermostatoTemp";
}

CommandClientSetTermostatoTemp.prototype.getNombre = function () {
  return this.nombre;
};

CommandClientSetTermostatoTemp.prototype.ejecutar = function(parametros) {
  var mac         = parametros["mac"];
  var nTermostato = parametros["nTermostato"];
  var valor       = parametros["valor"];
  var clave       = "tempTermostato"+nTermostato;

  this.listaDispositivos.cambiarValor(mac, clave, valor);
};
