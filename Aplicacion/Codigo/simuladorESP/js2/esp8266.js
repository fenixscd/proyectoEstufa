function esp8266(){
  this.mac;
  this.conexion     = new Conexion(this);
  this.termometro   = new Termometro(this.conexion);
  this.humedad      = new Humedad(this.conexion);
  this.resistencia1 = new Resistencia(1, this.conexion);
  this.resistencia2 = new Resistencia(2, this.conexion);
  this.programador1 = new Programador(this.resistencia1, this.conexion);
  this.programador2 = new Programador(this.resistencia2, this.conexion);
}

esp8266.prototype.buclePrincipal = function () {
  // Modificar valores

};


esp8266.prototype.bucleEnviarDatos = function () {
  //   window.setTimeout(function() {
  //     bucle(obj);
  //   }, 2000);
  //   obj.estufa.cambiarMediciones();
};

esp8266.prototype.solicirarDatosIniciales = function () {

};


// function bucle (obj){
//   window.setTimeout(function() {
//     bucle(obj);
//   }, 2000);
//   obj.estufa.cambiarMediciones();
