function CommandSetHumedad(listaDispositivos) {
  this.listaDispositivos = listaDispositivos;
  this.nombre            = "setHumedad";
}

CommandSetHumedad.prototype.getNombre = function () {
  return this.nombre;
};

CommandSetHumedad.prototype.ejecutar = function(parametros) {
  console.log("Comando "+ setNombreDispositivo + " parametros " + parametros);
  var mac         = parametros["mac"];
  var clave       = "humedad";
  var valor       = parametros["valor"];

  this.listaDispositivos.cambiarValor(mac, clave, valor);
};
