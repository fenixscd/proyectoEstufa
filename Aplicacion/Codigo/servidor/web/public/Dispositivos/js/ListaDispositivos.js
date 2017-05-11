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
  console.log("dispositivos: " + this.listaDispositivos);
  console.log(this.listaDispositivos[0]);
  for (var i = 0; i < this.listaDispositivos.length; i++) {
    console.log("dispositivo: " + this.listaDispositivos[i].getMac());
    if (this.listaDispositivos[i].getMac() == mac )
      return this.listaDispositivos[i];
  }
  console.log("El dispositivo " + mac + " NO ESTA EN LA LISTA DE DISPOSITIVOS");
  return false;
};

ListaDispositivos.prototype.cambiarEstado = function (estado) {
  for (var i = 0; i < this.listaDispositivos.length; i++) {
    this.listaDispositivos[i].setConexion(estado);
  }
};

ListaDispositivos.prototype.cambiarValor = function(clave, valor) {

  document.getElementById(clave + mac).innerHTML = valor;


  for (var i = 0; i < this.listaDispositivos.length; i++) {
    console.log("dispositivo: " + this.listaDispositivos[i].getMac());
    if (this.listaDispositivos[i].getMac() == mac )
      return this.listaDispositivos[i];
  }



}
