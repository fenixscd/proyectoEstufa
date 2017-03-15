function Termometro(conexion, display){
  this.conexion = conexion;
  this.display = display;
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
  valorRandom = valorRandom * (multiplicador/3); // Si no varia muy rapido

  var total =  parseFloat(this.getMedicion()) + parseFloat(valorRandom);
  this.setMedicion(total);
};

Termometro.prototype.pintarDisplay = function () {
  this.display.cambiarValor("temperatura", this.getMedicion());
};

Termometro.prototype.actualizarMedicion = function (isEncendida) {
  this.cambiarMedicion(isEncendida);
  this.pintarDisplay();
};
