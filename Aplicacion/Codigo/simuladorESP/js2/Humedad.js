function Humedad(conexion, display){
  this.humedad;
  this.display       = display;
  this.conexion      = conexion;
  this.humedadMaxima = 99;
  this.humedadMinima = 0;

  this.humedadInicial();
}

Humedad.prototype.getMedicion = function(){
  return parseFloat(this.humedad).toFixed(0);
}


Humedad.prototype.humedadInicial = function (){
  var valor = this.generarValorEntreDosNumeros(this.humedadMaxima, this.humedadMinima);
  this.humedad = valor.toFixed(0);
};

Humedad.prototype.getEntreValores = function (cantidad, cantidadMaxima, cantidadMinima) {
  var resultado = cantidad;
  if (cantidad >= cantidadMaxima){
    resultado = cantidadMaxima;
  }else if (resultado <= cantidadMinima) {
    resultado = cantidadMinima;
  }
  return resultado;
};

Humedad.prototype.generarValorEntreDosNumeros  = function(max, min){
  return Math.random() * (max - min) + min;
};

Humedad.prototype.cambiarHumedad = function () {
  // Un random para que suva de manera aleatoria
  var valorRandom = (Math.random()*2)-1;
  var total = parseFloat(this.getMedicion()) + parseFloat(valorRandom);
  this.setMedicion(total);
};

Humedad.prototype.setMedicion = function(humedad){
  this.humedad = this.getEntreValores(humedad, this.humedadMaxima, this.humedadMinima);
};

Humedad.prototype.actualizarEstado = function () {
  this.cambiarHumedad();
  this.pintarHumedad();
};

Humedad.prototype.pintarHumedad = function () {
  this.display.cambiarValor("humedad", this.getMedicion());
};

Humedad.prototype.enviarHumedad = function () {
  this.conexion.enviarDatos("humedad", this.getMedicion());
};
