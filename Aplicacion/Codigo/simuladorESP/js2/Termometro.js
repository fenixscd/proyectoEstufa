function Termometro(){
  this.temperatura;
  this.temperaturaMaxima = 40;
  this.temperaturaMinima = -20;

  this.temperaturaInicial();
}

Termometro.prototype.temperaturaInicial = function (){
  var valor = this.generarValorEntreDosNumeros(this.temperaturaMaxima, this.temperaturaMinima);
  this.setMedicion(valor.toFixed(1));
};

Termometro.prototype.generarValorEntreDosNumeros  = function(max, min){
  return Math.random() * (max - min) + min;
};

Termometro.prototype.getMedicion = function (isEncendida) {
  return parseFloat(this.temperatura).toFixed(1);
  this.cambiarMedicion(isEncendida);
};

Termometro.prototype.setMedicion = function (temperatura) {
  this.temperatura = this.getEntreValores(temperatura, this.temperaturaMaxima, this.temperaturaMinima);
};

Termometro.prototype.getEntreValores = function (cantidad, cantidadMaxima, cantidadMinima) {
  var resultado = cantidad;
  if (cantidad >= cantidadMaxima){
    resultado = cantidadMaxima;
  }else if (resultado <= cantidadMinima) {
    resultado = cantidadMinima;
  }
  return resultado;
};

Termometro.prototype.cambiarMedicion = function (isEncendida) {
  var multiplicador = 0;
  var valorRandom = Math.random();

  if (isEncendida){
    multiplicador++;
  } else {
    multiplicador--;
  }
  valorRandom = valorRandom * multiplicador;

  var total =  parseFloat(this.getMedicion()) + parseFloat(valorRandom);
  this.setMedicion(total);
};
