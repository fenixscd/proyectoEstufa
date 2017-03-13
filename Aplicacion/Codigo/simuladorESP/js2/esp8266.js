function esp8266(){

  // Añadir la conexion
  this.termometro   = new Termometro();
  this.humedad      = new Humedad();
  this.resistencia1 = new Resistencia(1);
  this.resistencia2 = new Resistencia(2);
  this.programador1 = new Programador(this.resistencia1);
  this.programador2 = new Programador(this.resistencia2);
}

esp8266.prototype.buclePrincipal = function () {

};


esp8266.prototype.bucleEnviarDatos = function () {

};

// function bucle (obj){
//   window.setTimeout(function() {
//     bucle(obj);
//   }, 2000);
//   obj.estufa.cambiarMediciones();
