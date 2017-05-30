function CommandClientSetResitenciaEstado(listaDispositivos) {
  this.listaDispositivos = listaDispositivos;
  this.nombre            = "clientSetResitenciaEstado";
}

CommandClientSetResitenciaEstado.prototype.getNombre = function () {
  return this.nombre;
};

CommandClientSetResitenciaEstado.prototype.ejecutar = function(parametros) {
  var mac         = parametros["mac"];
  var nResistencia = parametros["nResistencia"]

  var clave       = "resitencia"+nResistencia+"Estado";
  var valor       = parametros["valor"];

  if (valor == true) {
    valor = "*"
  }else{
    valor = " "
  }

  this.listaDispositivos.cambiarValor(mac, clave, valor);
};
