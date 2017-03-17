function Resistencia (numero, conexion, display, termometro){
  this.conexion	            = conexion;
  this.display	            = display;
  this.termometro           = termometro;
  this.numero               = numero;
  this.modoManual           = false;
  this.modoEncendido        = false;
  this.resistenciaEncendida = false;
  this.temperatura          = 28; // Temperatura de funcionamiento;
  //this.pintarValoresDisplay();
}

Resistencia.prototype.getNumero = function () {
  return this.numero;
};

Resistencia.prototype.getModoManual = function() {
	return this.modoManual;
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

Resistencia.prototype.setModoManual = function(modoManual) {
	this.modoManual = modoManual;
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

Resistencia.prototype.setResistenciaEncendida = function(resistenciaEncendida) {
  console.log("Resitencia encender " + this.getNumero()+ " estado " + this.getResistenciaEncendida() + resistenciaEncendida);
  if (this.resistenciaEncendida != resistenciaEncendida){
    this.resistenciaEncendida = resistenciaEncendida;
    this.enviarResistenciaEncendida();
  }
  this.pintarResistenciaEncendida();
};

Resistencia.prototype.setTemperatura = function(temperatura) {
	this.temperatura = temperatura;
  this.pintarTemperatura();
  this.enviarTemperatura();
};



/////////////// FLUJO ///////////////////////

Resistencia.prototype.isEncenderResistencia = function (temperaturaActual) {

  var encenderResistencia = parseFloat(this.getTemperatura()) <= parseFloat(temperaturaActual);
  console.log("Encender resitencia " + encenderResistencia);
  return encenderResistencia;
};

// Metodo que llama el bucle para hacer verificar si hay cambios
Resistencia.prototype.actualizarEstado = function(temperaturaActual) {
  this.pintarEnConsola();
	if (this.getModoEncendido()){
		if (this.isEncenderResistencia(temperaturaActual)){ // Si es mallor o igual apago la resistencia
      console.log("Apaga la resistencia " + this.getNumero());
			this.setResistenciaEncendida(false);
		} else {
      console.log("Enciende la resistencia " + this.getNumero());
			this.setResistenciaEncendida(true); // Si es menor enciendo la resistencia
		}
	}
};


//////////////////// ENVIAR ACTUALIZAR DISPLAY ///////////////////////////////


Resistencia.prototype.pintarModoManual = function () {
  var pintar = "A";
  if (this.getModoManual()) pintar = "M";
  this.display.cambiarValor(("resistenciaAutomatico" + this.numero), pintar);
};

Resistencia.prototype.enviarModoManual = function () {
  this.conexion.enviarDatos(("resistenciaAutomatico" + this.numero), this.getModoManual());
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
  if ( this.getTemperatura() != undefined){
    this.conexion.enviarDatos(("resistenciaTemperatura" + this.numero), this.getTemperatura());wsddssxdrftfrgt
  }

};

Resistencia.prototype.pintarEnConsola = function () {
  console.log("Resistencia: " + this.getNumero());
  console.log("    Modo Manual: " + this.getModoManual());
  console.log("    Modo Encendido: " + this.getModoEncendido());
  console.log("    Resistencia Encendida: " + this.getResistenciaEncendida());
};

Resistencia.prototype.pintarValoresDisplay = function () {
  this.pintarModoManual();
  this.pintarModoEncendido();
  this.pintarResistenciaEncendida();
  this.pintarTemperatura();
};
