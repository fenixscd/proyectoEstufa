function Termostato(numero, display, dispositivo, resistencia){
  this.resistencia       = resistencia;
  this.numero            = numero;
  this.display           = display;
  this.estdo             = false;
  this.temperaturaSelec;
}

Termostato.prototype.getTemperaturaSelec = function (){
  return parseFloat(this.temperaturaSelec);
}

Termostato.prototype.getEstdo = function () {
  return this.estado;
};

Termostato.prototype.setEstado = function () {
  // Envia el cambio de estado
};

Termostato.prototype.setTemperaturaSelec = function (temperaturaSelec) {
  this.temperaturaSelec = temperaturaSelec;
  return this;
};

Termostato.prototype.actualizarEstado = function (temperaturaActual) {
  if (this.estdo){
    var isTemperaturaSelec = parseFloat(this.getTemperaturaSelec()) <= parseFloat(temperaturaActual);
    this.resistencia.setEstado(isTemperaturaSelec);
  }
};

Termostato.prototype.pintarEstado = function () {
  pintar = "";
  if (this.getEstdo()){
    var pintar = this.getTemperatura();
  }
  this.display.cambiarValor(("resistenciaTemperatura" + this.numero), pintar);
};
