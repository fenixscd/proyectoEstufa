function CommandCrearDispositivo(listaDispositivos, peticionesLista) {
  this.listaDispositivos = listaDispositivos;
  this.peticionesLista   = peticionesLista;
  this.nombre            = "crearDispositivo";
  this.datos             = new Object();
}

CommandCrearDispositivo.prototype.getNombre = function () {
  return this.nombre;
};

CommandCrearDispositivo.prototype.ejecutar = function(parametros) {
  var mac = parametros["mac"];
  this.listaDispositivos.addDispositivo(new Dispositivo(mac, this.peticionesLista));
  console.log("Numero de dispositivos: " + this.listaDispositivos.getNElementos());
};
