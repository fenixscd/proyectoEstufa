function Resistencia (numero, conexion, display, termometro){
  this.conexion	            = conexion;
  this.display	            = display;
  this.termometro           = termometro;
  this.numero               = numero;
  this.estado               = false;
  this.resistenciaEncendida = false;
  this.temperatura          = false; // Temperatura de funcionamiento;

  this.pintarValoresDisplay();
  this.actualizarEstado(this.termometro.getMedicion());
}

Resistencia.prototype.getNumero = function () {
  return this.numero;
};

Resistencia.prototype.getResistenciaEncendida = function() {
	return this.estado;
};

Resistencia.prototype.getTemperatura = function() {
	return parseFloat(this.temperatura).toFixed(1);
};

Resistencia.prototype.setTemperatura = function(temperatura) {
	this.temperatura = temperatura;
  this.pintarTemperatura();
  this.enviarTemperatura();
  this.actualizarEstado(this.termometro.getMedicion());
};

Resistencia.prototype.setResistenciaEncendida = function(resistenciaEncendida) {
  // console.log("Resitencia encender " + this.getNumero()+ " estado " + this.getResistenciaEncendida() + resistenciaEncendida);
  if (this.resistenciaEncendida != resistenciaEncendida){
    this.resistenciaEncendida = resistenciaEncendida;
    this.pintarResistenciaEncendida();
    // this.enviarResistenciaEncendida();
  }
};

Resistencia.prototype.setEstado = function (nuevoEstado) {
  // console.log("Resitencia encender " + this.getNumero()+ " estado " + this.getResistenciaEncendida() + resistenciaEncendida);
  if (this.estado != nuevoEstado){
    this.resistenciaEncendida = resistenciaEncendida;
    this.pintarResistenciaEncendida();
    this.enviarResistenciaEncendida();
  }
};

/////////////// FLUJO ///////////////////////

Resistencia.prototype.isEncenderResistencia = function (temperaturaActual) {
  return parseFloat(this.getTemperatura()) <= parseFloat(temperaturaActual);
};

// Metodo que llama el bucle para hacer verificar si hay cambios
Resistencia.prototype.actualizarEstado = function(temperaturaActual) {
	if (this.isEncenderResistencia(temperaturaActual)){ // Si es mallor o igual apago la resistencia
		this.setResistenciaEncendida(false);
	} else {
		this.setResistenciaEncendida(true); // Si es menor enciendo la resistencia
	}

};

Resistencia.prototype.iniciar = function () {
  this.pintarValoresDisplay();
  this.actualizarEstado(this.termometro.getMedicion());
};

//////////////////// ENVIAR ACTUALIZAR DISPLAY ///////////////////////////////

Resistencia.prototype.pintarResistenciaEncendida = function () {
  var pintar = " ";
  if (this.getResistenciaEncendida()) pintar = "*";
  this.display.cambiarValor(("estadoResitencia" + this.numero), pintar);
};

// Resistencia.prototype.pintarTemperatura = function () {
//   pintar = "";
//   if (this.getModoEncendido()){
//     var pintar = this.getTemperatura();
//   }
//   this.display.cambiarValor(("resistenciaTemperatura" + this.numero), pintar);
// };


Resistencia.prototype.pintarEnConsola = function () {
  console.log("Resistencia: " + this.getNumero());
  console.log("    Modo Encendido: " + this.getModoEncendido());
  console.log("    Resistencia Encendida: " + this.getResistenciaEncendida());
};

Resistencia.prototype.pintarValoresDisplay = function () {
  this.pintarResistenciaEncendida();
  // this.pintarTemperatura();
};
