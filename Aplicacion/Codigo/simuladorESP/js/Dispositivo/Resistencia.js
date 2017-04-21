function Resistencia (numero, conexion, display, termometro){
  this.conexion	            = conexion;
  this.display	            = display;
  this.termometro           = termometro;
  this.numero               = numero;
  this.modoAutomatico       = false;
  this.modoEncendido        = false;
  this.resistenciaEncendida = false;
  this.temperatura          = false; // Temperatura de funcionamiento;

  this.pintarValoresDisplay();
  this.actualizarEstado(this.termometro.getMedicion());

}

Resistencia.prototype.getNumero = function () {
  return this.numero;
};

Resistencia.prototype.getModoAutomatico = function() {
	return this.modoAutomatico;
};

Resistencia.prototype.getModoEncendido = function() {
	return this.modoEncendido;
};

Resistencia.prototype.getResistenciaEncendida = function() {
	return this.resistenciaEncendida;
};


Resistencia.prototype.getTemperatura = function() {
	return parseFloat(this.temperatura).toFixed(1);
};


// Seters --------

Resistencia.prototype.setModoAutomatico = function(modoAutomatico) {
	this.modoAutomatico = modoAutomatico;
  this.pintarModoManual();
  this.enviarModoManual();
  this.actualizarEstado(this.termometro.getMedicion());
};

Resistencia.prototype.setModoEncendido = function (modoEncendido) {
  this.modoEncendido = modoEncendido;
  this.pintarModoEncendido();
  this.enviarModoEncendido();
  this.actualizarEstado(this.termometro.getMedicion());
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
    this.enviarResistenciaEncendida();
  }
};

Resistencia.prototype.cambioTemporizador = function (modoEncendido, temperatura) {
  if (this.getModoAutomatico()){
    this.setModoEncendido(modoEncendido);
    this.setTemperatura(temperatura);
  }
};

/////////////// FLUJO ///////////////////////

Resistencia.prototype.isEncenderResistencia = function (temperaturaActual) {
  var encenderResistencia = parseFloat(this.getTemperatura()) <= parseFloat(temperaturaActual);
  return encenderResistencia;
};

// Metodo que llama el bucle para hacer verificar si hay cambios
Resistencia.prototype.actualizarEstado = function(temperaturaActual) {
	if (this.getModoEncendido()){
		if (this.isEncenderResistencia(temperaturaActual)){ // Si es mallor o igual apago la resistencia
			this.setResistenciaEncendida(false);
		} else {
			this.setResistenciaEncendida(true); // Si es menor enciendo la resistencia
		}
	}
};

Resistencia.prototype.iniciar = function () {
  this.pintarValoresDisplay();
  this.actualizarEstado(this.termometro.getMedicion());
};

//////////////////// ENVIAR ACTUALIZAR DISPLAY ///////////////////////////////

Resistencia.prototype.pintarModoManual = function () {
  var pintar = "M";
  if (this.getModoAutomatico()) pintar = "A";
  this.display.cambiarValor(("resistenciaAutomatico" + this.numero), pintar);
};

Resistencia.prototype.enviarModoManual = function () {
  this.conexion.enviarDatos(("resistenciaAutomatico" + this.numero), this.getModoAutomatico());
};


Resistencia.prototype.pintarModoEncendido = function () {
  var pintar = "OFF";
  if (this.getModoEncendido()) pintar = "ON";
  this.display.cambiarValor(("resistenciaEncendida" + this.numero), pintar);
};

Resistencia.prototype.enviarModoEncendido = function () {
  this.conexion.enviarDatos(("resistenciaEncendida" + this.numero), this.getModoEncendido());
};


Resistencia.prototype.pintarResistenciaEncendida = function () {
  var pintar = " ";
  if (this.getResistenciaEncendida()) pintar = "*";
  this.display.cambiarValor(("resistenciaEstado" + this.numero), pintar);
};

Resistencia.prototype.enviarResistenciaEncendida = function () {
  this.conexion.enviarDatos(("resistenciaEstado" + this.numero), this.getResistenciaEncendida());
};

Resistencia.prototype.pintarTemperatura = function () {
  pintar = "";
  if (this.getModoEncendido()){
    var pintar = this.getTemperatura();
  }
  this.display.cambiarValor(("resistenciaTemperatura" + this.numero), pintar);
};

Resistencia.prototype.enviarTemperatura = function () {
  this.conexion.enviarDatos(("resistenciaTemperatura" + this.numero), this.getTemperatura());
};

Resistencia.prototype.pintarEnConsola = function () {
  console.log("Resistencia: " + this.getNumero());
  console.log("    Modo Automatico: " + this.getModoAutomatico());
  console.log("    Modo Encendido: " + this.getModoEncendido());
  console.log("    Resistencia Encendida: " + this.getResistenciaEncendida());
};

Resistencia.prototype.pintarValoresDisplay = function () {
  this.pintarModoManual();
  this.pintarModoEncendido();
  this.pintarResistenciaEncendida();
  this.pintarTemperatura();
};
