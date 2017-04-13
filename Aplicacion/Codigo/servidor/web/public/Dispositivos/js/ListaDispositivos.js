function ListaDispositivos(){
  this.listaDispositivos = new Array()
}

ListaDispositivos.prototype.addDispositivo = function (dispositivo) {
  this.listaDispositivos.push(dispositivo);
};

ListaDispositivos.prototype.getNElementos = function () {
  return this.listaDispositivos.length;
};

ListaDispositivos.prototype.isDispositivos = function () {
  if (this.getNElementos() == 0) return true;
  else return false;
};

ListaDispositivos.prototype.getDispositivos = function (mac) {
  for (var i = 0; i < this.listaDispositivos.length; i++) {
    if (this.listaDispositivos[i].getMac() == mac )
      return this.listaDispositivos[i];
  }
};
