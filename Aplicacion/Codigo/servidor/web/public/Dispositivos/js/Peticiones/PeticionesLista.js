function PeticionesLista (){
  this.peticionesLista = new Array();
}

PeticionesLista.prototype.addPeticion = function (peticion) {
  this.peticionesLista.push(peticion);
};


PeticionesLista.prototype.getNPeticiones = function () {
  return this.peticionesLista.length;
};

PeticionesLista.prototype.isCommands = function () {
  if (this.getNCommands() == 0) return true;
  else return false;
};

PeticionesLista.prototype.getPeticion = function (peticion) {
  for (var i = 0; i < this.peticionesLista.length; i++) {
    if (this.peticionesLista[i].getNombre() == peticion ){
      return this.peticionesLista[i];
    }
  }
  console.log("La peticion -" + peticion + "- no a sido encontrada");
  return false;
};
