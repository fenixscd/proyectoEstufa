function ListaMensajes(){
  this.listaMensajes = new Array()
}

ListaMensajes.prototype.addMensaje = function (msg) {
  this.listaMensajes.unshift(msg);
};

ListaMensajes.prototype.ultimoElemento = function () { // Devuelve y quita el ulimo elemento de la lista
  return this.listaMensajes.pop();
};

ListaMensajes.prototype.getNElementos = function () {
  return this.listaMensajes.length;

};

ListaMensajes.prototype.isVacia = function () {
  if (this.getNElementos() == 0) return true;
  else return false;
};
