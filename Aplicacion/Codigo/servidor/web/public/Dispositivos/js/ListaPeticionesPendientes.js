function ListaPeticionesPendientes(){
  this.listaPeticionesPendientes = new Array()
}

ListaPeticionesPendientes.prototype.addMensaje = function (peticion) {
  this.listaPeticionesPendientes.unshift(peticion);
};

ListaPeticionesPendientes.prototype.ultimoElemento = function () { // Devuelve y quita el ulimo elemento de la lista
  return this.listaPeticionesPendientes.pop();
};

ListaPeticionesPendientes.prototype.getNPeticionesPendientes = function () {
  return this.listaPeticionesPendientes.length;
};

ListaPeticionesPendientes.prototype.isPeticionesPendientes = function () {
  if (this.getNPeticionesPendientes() > 0) return true;
  else return false;
};

ListaPeticionesPendientes.prototype.isListaVacia = function () {
  if (this.getNPeticionesPendientes() == 0) return true;
  else return false;
};
// isVacia
