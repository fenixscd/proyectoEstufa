function CommandsLista (){
  this.commandsLista = new Array()
}

CommandsLista.prototype.addCommand = function (command) {
  this.commandsLista.push(command);
};

CommandsLista.prototype.getNCommands = function () {
  return this.commandsLista.length;
};

CommandsLista.prototype.isCommands = function () {
  if (this.getNCommands() == 0) return true;
  else return false;
};

CommandsLista.prototype.getCommand = function (nombreComando) {
  for (var i = 0; i < this.commandsLista.length; i++) {
    if (this.commandsLista[i].getNombre() == nombreComando )
      return this.commandsLista[i];
  }
  console.log("El comando - "+ nombreComando +" - no existe:");
  return false;
};
