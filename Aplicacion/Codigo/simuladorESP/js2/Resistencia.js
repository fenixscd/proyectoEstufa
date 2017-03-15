function Resistencia (numero, conexion, display){
  this.conexion	            = conexion;
  this.numero               = numero;
  this.display	            = display;
  this.modoManual           = false;
  this.modoEncendido        = false;
  this.resistenciaEncendida = false;
  this.temperatura          = 28; // Temperatura de funcionamiento;
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
	return this.temperatura;
};


// Seters --------

Resistencia.prototype.setModoManual = function(modoManual) {
	this.modoManual = modoManual;
  this.pintarModoManual()
  this.enviarModoManual()
};

Resistencia.prototype.setModoEncendido = function (modoEncendido) {
  this.modoEncendido = modoEncendido;
};

Resistencia.prototype.setResistenciaEncendida = function(resistenciaEncendida) {
	this.resistenciaEncendida = resistenciaEncendida;
  this.pintarResistenciaEncendida();
  this.enviarResistenciaEncendida();
  this.pintarTemperatura();
};

Resistencia.prototype.setTemperatura = function(temperatura) {
	this.temperatura = temperatura;
  this.pintarTemperatura();
  this.enviarTemperatura();
};



/////////////// METODOS QUE SE UTILIZARAN DESDE FUERA ///////////////////////

Resistencia.prototype.isSePuedeEncender = function () {
  return this.encendida || (!this.manual);
};

// Metodo que llama el bucle para hacer verificar si hay cambios
Resistencia.prototype.actualizarEstado = function(temperaturaActual) {
	var estadoActual = this.estado;
	if (this.isSePuedeEncender()){
		if (this.temperatura >= temperaturaActual){ // Si es mallor o igual apago la resistencia
      console.log("Apagar resistencia");
			this.setResistenciaEncendida(false);
		} else {
      console.log("Enciendo la resisten");
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
  this.conexion.enviarDatos(("resistenciaEncendida" + this.numero), this.getEstado());
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
  var pintar = this.getTemperatura();
  if (!this.isSePuedeEncender()){
    pintar = "";
  }
this.display.cambiarValor(("resistenciaTemperatura" + this.numero), pintar);
};

Resistencia.prototype.enviarTemperatura = function () {
  this.conexion.enviarDatos(("resistenciaTemperatura" + this.numero), this.getTemperatura());
};
