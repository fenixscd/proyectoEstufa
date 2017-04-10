function PeticionesLista (){
  this.peticionesLista = new Array()
}

PeticionesLista.prototype.addPeticion = function (peticion) {
  this.peticionesLista.push(peticion);
};


PeticionesLista.prototype.getNComandos = function () {
  return this.peticionesLista.length;
};

PeticionesLista.prototype.isPeticiones = function () {
  if (this.getNComandos() == 0) return true;
  else return false;
};

PeticionesLista.prototype.getPeticion = function (comando) {
  console.log("Total comandos "+ this.peticionesLista.length);
  console.log("Comando " + comando);

  for (var i = 0; i < this.peticionesLista.length; i++) {
    console.log("Lista de comandos " + this.peticionesLista[i].getNombre());

    if (this.peticionesLista[i].getNombre() == comando )
      return this.peticionesLista[i];
  }
};
