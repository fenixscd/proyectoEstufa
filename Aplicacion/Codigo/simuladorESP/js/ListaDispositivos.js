function ListaDispositivos(){
     this.listaDispositivos = new Array();
}

ListaDispositivos.prototype.getTotalDispositivos = function () {
  return this.listaDispositivos.length;
};
/**
* Compruba si una mac ya a sido asignada.
* @param {String} mac dirección mac.
* @return {bool} true si existe false si no.
*/
ListaDispositivos.prototype.isExisteMAC = function (mac) {
  // el for sin tener en cuenta el ulimo dispositivo.

  for (var dispositivo in this.listaDispositivos) {
    if (dispositivo.getMac === mac){
      return true;
    }
    return false;
  }
};

/**
* Antes de añadir verificamos que la mac no este duplicada.
*/
ListaDispositivos.prototype.addDispositivo = function () {
  var nuevoDispositivo = new Dispositivo();
  // do {
  //    nuevoDispositivo
  // } while (this.isExisteMAC(nuevoDispositivo.getMac()));

  this.listaDispositivos.push(nuevoDispositivo);
  console.log("Total elementos: "+this.listaDispositivos.length);
  return nuevoDispositivo;
};


ListaDispositivos.prototype.showMACs = function () {
  for (let dispositivo of this.listaDispositivos) {
    console.log(dispositivo.getMac());
  }
};

ListaDispositivos.prototype.cambiarDatos = function () {
  for (let dispositivo of this.listaDispositivos) {
    dispositivo.cambiarTemperatura();
    dispositivo.cambiarHumedad();
    // dispositivo.pintarDatos();
  }
};
