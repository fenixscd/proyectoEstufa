function CommandSetTemperatura(listaDispositivos) {
  this.listaDispositivos = listaDispositivos;
  this.nombre            = "clientSetTermometro";
}

CommandSetTemperatura.prototype.getNombre = function () {
  return this.nombre;
};

CommandSetTemperatura.prototype.ejecutar = function(parametros) {
  console.log("Comando "+ this.getNombre() + " parametros " + parametros);
  var mac         = parametros["mac"];
  var clave       = "temperatura";
  var valor       = parametros["valor"];

  this.listaDispositivos.cambiarValor(mac, clave, valor);
};
