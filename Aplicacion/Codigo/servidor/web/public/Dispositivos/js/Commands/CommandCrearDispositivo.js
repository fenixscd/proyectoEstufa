// Crea una instacia del dispositivo
// Lo añade a la lista de dispositivos

function CommandCrearDispositivo() {
  this.nombre      = "crearDispositivo";
  this.datos       = new Object();
}

CommandCrearDispositivo.prototype.getNombre = function () {
  return this.nombre;
};

CommandCrearDispositivo.prototype.ejecutar = function(mac, listaDispositivos, peticionesLista) {
  listaDispositivos.addDispositivo(new Dispositivo(mac, peticionesLista));
  console.log("Numero de dispositivos: " + listaDispositivos.getNElementos());
};
