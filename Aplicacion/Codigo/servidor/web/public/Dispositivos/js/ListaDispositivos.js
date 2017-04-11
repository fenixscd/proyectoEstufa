function ListaDispositivos(){
  this.listaDispositivos = new Array()
}

ListaDispositivos.prototype.addDispositivo = function (msg) {
  this.listaMensajes.unshift(msg);
};

ListaDispositivos.prototype.getNElementos = function () {
  return this.listaMensajes.length;
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
