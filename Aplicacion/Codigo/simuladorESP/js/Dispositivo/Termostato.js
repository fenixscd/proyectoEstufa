unction Termostato(display, dispositivo){
  this.display           = display;
  this.temperaturaMaxima = 40;
  this.temperaturaMinima = -20;
  this.temperaturaSelec;
}

Termometro.prototype.getTemperaturaSelec = function (){
  return this.temperaturaSelec;
}

Termostato.prototype.setTemperaturaSelecionada = function (temperaturaSelec) {
  this.temperaturaSelec = temperaturaSelec;
  return this;
};

Termostato.prototype.isTemperaturaMaxima = function () {
  
};

Termostato.prototype.isTemperaturaMinima = function () {

};

Termostato.prototype.isTemperaturaSelec = function () {

};
