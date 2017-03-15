function Resistencia (numero, conexion, display){
  this.conexion	   = conexion;
  this.numero      = numero;
  this.display	   = display;
  this.encendida   = false; // Si tiene que estar en modo endendida
  this.automatico  = false; // Si esta en modo automatico realiza las hoperaciones con la hora si no no lo hace
  this.temperatura = 28; // Temperatura de funcionamiento;
  this.estado 	   = false; // Encendida cuando la temperatura no es la soliciata apagada si la temperatura es igula o superior a al necesitada.
  this.automatico  = false; // Si esta la resistencia manual o automatico
}

Resistencia.prototype.getNumero = function () {
  return this.numero;
};

Resistencia.prototype.getEncendida = function() {
	return this.encendida;
};

Resistencia.prototype.getAutomatico = function() {
	return this.automatico;
};

Resistencia.prototype.getTemperatura = function() {
	return this.temperatura;
};

Resistencia.prototype.getEstado = function() {
	return this.estado;
};

// Seters --------

Resistencia.prototype.setEncendida = function(encendida) {
	this.encendida = encendida;
  this.pintarEncendida();
};

Resistencia.prototype.setAutomatico = function(automatico) {
	this.automatico = automatico;
};

Resistencia.prototype.setTemperatura = function(temperatura) {
	this.temperatura = temperatura;
  this.pintarTemperatura();
};

Resistencia.prototype.setEstado = function(estado) {
  if( this.estado != estado){
    this.estado = estado;
    this.display.pintarEstado();
    this.conexion.enviarEstado();
  }
};


/////////////// METODOS QUE SE UTILIZARAN DESDE FUERA ///////////////////////
Resistencia.prototype.cambiarValores = function(encendida, automatico, temperatura, temperaturaActual) {
	this.setEncendida(encendida);
	this.setAutomatico(automatico);
	this.temperatura(temperatura);

	this.actualizarEstado(temperaturaActual);
};


// Metodo que llama el bucle para hacer verificar si hay cambios
Resistencia.prototype.actualizarEstado = function(temperaturaActual) {
  var sePuedeEncender = this.encendida || this.manual;
	var estadoActual = this.estado;
	if (sePuedeEncender){
		if (this.temperatura >= temperaturaActual){ // Si es mallor o igual apago la resistencia
			this.setEstado(false);
		} else {
			this.setEstado(true); // Si es menor enciendo la resistencia
		}
	}
};

Resistencia.prototype.getJSON = function() {
	return{
    "encendida":this.getEncendida(),
		"automatico":this.getAutomatico(),
		"temperatura":this.getTemperatura(),
		"estado":this.getEstado()
  	};
};

Resistencia.prototype.isTemperaturaSeleccionada = function(temperaturaActual) {
	if (this.temperatura >= temperaturaActual){
		this.setEstado(false);
	} else {
		this.setEstado(true);
	}
};

//////////////////// ENVIAR ACTUALIZAR DISPLAY ///////////////////////////////

Resistencia.prototype.pintarEstado = function () {
  var pintar;
  if (this.getEstado()) pintar = "*";
  else pintar = " ";
  this.display.cambiarValor(("resistenciaEstado" + this.numero), pintar);
};

Resistencia.prototype.enviarEstado = function () {
  this.conexion.enviarDatos(("resistenciaEstado" + this.numero), this.getEstado());
};

Resistencia.prototype.pintarEncendida = function () {
  var pintar;
  if (this.getEncendida()) pintar = "ON";
  else pintar = "OFF";
  this.display.cambiarValor(("resistenciaEstado" + this.numero), pintar);
};

Resistencia.prototype.enviarEncendida = function () {
  this.conexion.enviarDatos(("resistenciaEncendida" + this.numero), this.getEstado());
};

Resistencia.prototype.pintarTemperatura = function () {
  this.display.cambiarValor(("resistenciaTemperatura" + this.numero), this.getTemperatura());
};

Resistencia.prototype.enviarTemperatura = function () {
  this.conexion.enviarDatos(("resistenciaTemperatura" + this.numero), this.getTemperatura());
};

Resistencia.prototype.pintarAutomatico = function () {
  var pintar;
  if (this.getAutomatico() pintar = "A";
  else pintar = "M";
  this.display.cambiarValor(("resistenciaAutomatico" + this.numero), pintar);
};

Resistencia.prototype.enviarAutomatico = function () {
  this.conexion.enviarDatos(("resistenciaAutomatico" + this.numero), this.getAutomatico());
};

Resistencia.prototype.pintarTemperatura() = function () {

};
