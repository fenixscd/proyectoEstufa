function CommandClientSetTermostatoEstado(listaDispositivos) {
  this.listaDispositivos = listaDispositivos;
  this.nombre            = "clientSetTermostatoEstado";
}

CommandClientSetTermostatoEstado.prototype.getNombre = function () {
  return this.nombre;
};

CommandClientSetTermostatoEstado.prototype.ejecutar = function(parametros) {
  console.log("Comando "+ this.nombre + " parametros " + parametros);
  var mac         = parametros["mac"];
  var nTermostato = parametros["nTermostato"];
  var valor       = parametros["valor"];
  var clave       = "termostato"+nTermostato+"Estado";

  // Tocar directamente el HTML
  var nodoHtml;
  var pintar;
  if (valor == true){
    pintar = "ON"
  }else{
    pintar = "OFF"
  }

  if (document.getElementById(clave + mac) != null){
    nodoHtml = document.getElementById(clave + mac);
  }else {
    console.log("No existe el clave \"" + clave + "\" en le HTML");
  }
  nodoHtml.value = pintar;


  //nodoHtml.getElementById(clave + mac).value = pintar;

  // this.listaDispositivos.cambiarValor(mac, clave, valor);
};
