function CommandSetTemperatura(listaDispositivos) {
  this.listaDispositivos = listaDispositivos;
  this.nombre            = "setTemperatura";
}

CommandSetTemperatura.prototype.getNombre = function () {
  return this.nombre;
};

CommandSetTemperatura.prototype.ejecutar = function(parametros) {
  console.log("Comando setTemperatura " + parametros["mac"]);
  var mac         = parametros["mac"];
  var clave       = "temperatura";
  var valor       = parametros["valor"];

  var dispositivo = this.listaDispositivos.getDispositivo(parametros["mac"]);

  console.log("Clave: " + clave);
  console.log("Valor: " + valor);
  if (dispositivo != false){
    console.log("Si que existe el dispositivo");
    dispositivo.getDisplay().cambiarValor(clave, valor);
  }
  //this.listaDispositivos.cambiarEstado(parametros);
};
