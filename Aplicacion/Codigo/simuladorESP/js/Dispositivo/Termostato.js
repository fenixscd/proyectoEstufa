function Termostato(numero, display, resistencia){
  this.resistencia       = resistencia;
  this.numero            = numero;
  this.display           = display;
  this.estado             = false;
  this.temperatura       = false;

  this.pintarEstado();
  this.pintarTemperatura();
}

Termostato.prototype.getTemperatura = function (){
  if (this.temperatura == false || this.temperatura == null ) {
    return parseFloat(0);
  }
  return parseFloat(this.temperatura);
}

Termostato.prototype.getEstado = function () {
  return this.estado;
};

Termostato.prototype.setEstado = function (estado) {
  this.estado = estado;
  this.pintarEstado();
  // Enviar el cambio de
};

Termostato.prototype.setTemperatura = function (temperatura) {
  this.temperatura = temperatura;
  this.pintarTemperatura();
  return this;
};

Termostato.prototype.actualizarEstado = function (temperaturaActual) {
  if (this.estado){
    var  isTemperaturaSelec = false;
    if (parseFloat(this.getTemperatura()) >= parseFloat(temperaturaActual)) {
      isTemperaturaSelec = true;
    }
    
    this.resistencia.setEstado(isTemperaturaSelec);
  }
};

Termostato.prototype.pintarEstado = function () {
  var estadoTermostato = "OFF";

  if (this.getEstado()){
    estadoTermostato = "ON"
  }
  this.display.cambiarValor(("estadoTermostato" + this.numero), estadoTermostato);
};

Termostato.prototype.pintarTemperatura = function () {
  this.display.cambiarValor(("tempTermostato" + this.numero), this.getTemperatura());
};
