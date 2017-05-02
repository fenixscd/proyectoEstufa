function CommandSetTemperatura(listaDispositivos) {
  this.listaDispositivos = listaDispositivos;
  this.nombre            = "setTermometro";
}

CommandSetTemperatura.prototype.getNombre = function () {
  return this.nombre;
};

CommandSetTemperatura.prototype.ejecutar = function(parametros) {
  console.log("Comando setTermometro ");
  var dispositivo = this.listaDispositivos.getDispositivo(mac);
  var mac         = parametros[mac];
  var clave       = "temperatura" + mac;
  var valor       = parametros[valor];


  if (dispositivo != false){
    dispositivo.getDisplay.cambiarValor(clave, valor);
  }
  //this.listaDispositivos.cambiarEstado(parametros);
};
