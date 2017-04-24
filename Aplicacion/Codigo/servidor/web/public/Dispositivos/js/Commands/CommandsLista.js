function CommandsLista (){
  this.commandsLista = new Array()
}

CommandsLista.prototype.addCommand = function (peticion) {
  this.commandsLista.push(peticion);
};


CommandsLista.prototype.getNCommands = function () {
  return this.commandsLista.length;
};

CommandsLista.prototype.isCommands = function () {
  if (this.getNCommands() == 0) return true;
  else return false;
};

CommandsLista.prototype.getCommand = function (comando) {
  for (var i = 0; i < this.commandsLista.length; i++) {
    if (this.commandsLista[i].getNombre() == comando )
      return this.commandsLista[i];
  }
  console.log("El comando - "+ comando +" - no existe:");
  return false;
};
