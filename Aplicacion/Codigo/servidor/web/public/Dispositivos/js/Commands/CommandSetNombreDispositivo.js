function CommandSetNombreDispositivo(listaDispositivos) {
  this.listaDispositivos = listaDispositivos;
  this.nombre            = "clientSetNombreDispositivo";
}

CommandSetNombreDispositivo.prototype.getNombre = function () {
  return this.nombre;
};

CommandSetNombreDispositivo.prototype.ejecutar = function(parametros) {
  console.log("Comando " + this.getNombre()  + " parametros ");
  console.log(parametros);
  var mac         = parametros["mac"];
  var clave       = "nombreDispositivo";
  var valor       = parametros["valor"];

  if (document.getElementById(clave + mac) != null){
    console.log("Si que encuetra la etiqueta");
    document.getElementById(clave + mac).value = valor;
  }else {
    console.log("No existe el clave \"" + clave + " - " + mac  + "\" en le HTML");
  }
};
