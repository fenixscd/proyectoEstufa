function EnviarLista (){
  this.enviarLista = new Array()
}

CommandsLista.prototype.addEnviar = function (peticion) {
  this.enviarLista.push(peticion);
};

CommandsLista.prototype.getNEnviar = function () {
  return this.enviarLista.length;
};

CommandsLista.prototype.isEnviar = function () {
  if (this.getNEnviar() == 0) return true;
  else return false;
};

CommandsLista.prototype.getEnviar = function (nombreEnviar) {
  for (var i = 0; i < this.enviarLista.length; i++) {
    if (this.enviarLista[i].getNombre() == nombreEnviar )
      return this.enviarLista[i];
  }
  console.log("El enviar - "+ nombreEnviar +" - no existe:");
  return false;
};
