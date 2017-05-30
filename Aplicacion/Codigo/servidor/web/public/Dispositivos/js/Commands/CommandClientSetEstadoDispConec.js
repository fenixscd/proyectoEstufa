function CommandClientSetEstadoDispConec(listaDispositivos) {
  this.listaDispositivos = listaDispositivos;
  this.nombre            = "clientSetEstadoDispConec";
}

CommandClientSetEstadoDispConec.prototype.getNombre = function () {
  return this.nombre;
};

CommandClientSetEstadoDispConec.prototype.ejecutar = function(parametros) {
  var mac         = parametros["mac"];
  var valor       = parametros["valor"];
  var dispositivo = this.listaDispositivos.getDispositivo(mac);

  dispositivo.setConexionDisp(valor);
};
