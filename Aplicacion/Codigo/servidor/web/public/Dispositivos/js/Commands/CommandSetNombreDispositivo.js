function CommandSetNombreDispositivo(listaDispositivos) {
  this.listaDispositivos = listaDispositivos;
  this.nombre            = "setNombreDispositivo";
}

CommandSetNombreDispositivo.prototype.getNombre = function () {
  return this.nombre;
};

CommandSetNombreDispositivo.prototype.ejecutar = function(parametros) {
  console.log("Comando "+ setNombreDispositivo + " parametros " + parametros);
  var mac         = parametros["mac"];
  var clave       = "nombreDispositivo";
  var valor       = parametros["valor"];

  //this.listaDispositivos.cambiarValor(mac, clave, valor);
};
