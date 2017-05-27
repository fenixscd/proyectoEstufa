function CommandClientSetEstadoDispConec(listaDispositivos) {
  this.listaDispositivos = listaDispositivos;
  this.nombre            = "clientSetEstadoDispConec";
}

CommandClientSetEstadoDispConec.prototype.getNombre = function () {
  return this.nombre;
};

CommandClientSetEstadoDispConec.prototype.ejecutar = function(parametros) {
  console.log("Comando "+ this.nombre + " parametros " + parametros);

  var mac         = parametros["mac"];
  var clave       = "estadoConexion";
  var valor       = parametros["valor"];

  var dispositivo = this.listaDispositivos.getDispositivo(mac);

  dispositivo.setConexionDisp(valor);

  if (valor == true) {
    valor = "CONEC"
  }else{
    valor = "DESCONEC"
  }

  this.listaDispositivos.cambiarValor(mac, clave, valor);
};
