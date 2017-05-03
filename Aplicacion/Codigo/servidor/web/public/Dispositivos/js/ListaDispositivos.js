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

ListaDispositivos.prototype.getDispositivo = function (mac) {
  for (var i = 0; i < this.listaDispositivos.length; i++) {
    if (this.listaDispositivos[i].getMac() == mac )
      return this.listaDispositivos[i];
  }
  return false;
};

ListaDispositivos.prototype.cambiarEstado = function (estado) {
  for (var i = 0; i < this.listaDispositivos.length; i++) {
    this.listaDispositivos[i].setConexion(estado);
  }
};

ListaDispositivos.prototype.rmConexion = function (conexion) {
  // Buscar conexion
};
