function ListaDispositivos(){
  this.listaDispositivos = new Array();
  this.estadoConexion    = false;
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


//////////////// Modificar cosas ///////

ListaDispositivos.prototype.cambiarValor = function(mac, clave, valor) {
  var dispositivo = this.getDispositivo(mac);
  dispositivo.getDisplay().cambiarValor(clave, valor);
}

ListaDispositivos.prototype.getNodoHtml = function (mac) {
  var dispositivo = this.getDispositivo(mac);
  return dispositivo.getDisplay().nodoHtml();
};

ListaDispositivos.prototype.cambiarEstado = function (estado) {
  this.setConexion(estado);
  for (var i = 0; i < this.listaDispositivos.length; i++) {
    this.listaDispositivos[i].setConexion(estado);
  }
};

ListaDispositivos.prototype.setConexion = function (estado) {
  this.estadoConexion = estado;
  this.pintarEstadoConexion(estado);
};

ListaDispositivos.prototype.pintarEstadoConexion = function () {
  var valor = "DESCONECTADO";

  if(this.estadoConexion){
    valor = "CONECTADO";
  }

  if (document.getElementById("conexion") != null){
    document.getElementById("conexion").innerHTML = valor;
  }else {
    console.log("No existe el clave \" conexion \" en le HTML");
  }
};
