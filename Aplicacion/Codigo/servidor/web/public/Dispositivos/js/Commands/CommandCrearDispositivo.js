function CommandCrearDispositivo(listaDispositivos) {
  this.listaDispositivos = listaDispositivos;
  this.nombre      = "crearDispositivo";
  this.datos       = new Object();
}

CommandCrearDispositivo.prototype.getNombre = function () {
  return this.nombre;
};

CommandCrearDispositivo.prototype.ejecutar = function(mac, peticionesLista) {
  this.listaDispositivos.addDispositivo(new Dispositivo(mac, peticionesLista));
  console.log("Numero de dispositivos: " + this.listaDispositivos.getNElementos());
};
