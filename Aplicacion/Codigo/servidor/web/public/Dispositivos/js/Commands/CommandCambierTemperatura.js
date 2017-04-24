function CommandCambiarTemperatura(listaDispositivos) {
  this.listaDispositivos = listaDispositivos;
  this.nombre            = "cambiarTemperatura";
  this.datos             = new Object();
}

CommandCambiarTemperatura.prototype.getNombre = function () {
  return this.nombre;
};

CommandCambiarTemperatura.prototype.ejecutar = function(parametros) {
  // Crear todo lo necesario para la contestacion en la lista de dispositivo
  // Necesito la mac
  var mac         = parametros.mac;
  var valor       = parametros.valor;
  var clave       = "temperatura" + mac;
  var dispositivo = this.listaDispositivos.getDispositivo(mac);

  if(dispositivo){
    dispositivo.display.cambiarValor(clave, valor);
  }
  
};
