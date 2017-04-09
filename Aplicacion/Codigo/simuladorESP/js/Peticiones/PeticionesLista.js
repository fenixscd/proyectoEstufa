function PeticionesLista (){
  this.peticionesLista = new Array()
}

PeticionesLista.prototype.addComando = function (command) {
  this.listaMensajes.push(command);
};


PeticionesLista.prototype.getNComandos = function () {
  return this.peticionesLista.length;

};

PeticionesLista.prototype.isComandos = function () {
  if (this.getNElementos() == 0) return true;
  else return false;
};

PeticionesLista.prototype.getComando = function (comando) {
  for (var i = 0; i < this.peticionesLista.length; i++) {
    if (this.peticionesLista[i].getNombre() == comando )
      return this.peticionesLista[i];
  }
};
