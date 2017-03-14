function Resistencia (numero, conexion, display){
  this.conexion	   = conexion;
  this.numero      = numero;
  this.encendida   = false; // Si tiene que estar en modo endendida
  this.automatico  = false; // Si esta en modo automatico realiza las hoperaciones con la hora si no no lo hace
  this.temperatura = false; // Temperatura de funcionamiento;
  this.estado 	   = false; // Encendida cuando la temperatura no es la soliciata apagada si la temperatura es igula o superior a al necesitada.
  this.enviarDatos = false; // Se inidica si se manda la actualización de datos
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
};

Resistencia.prototype.setAutomatico = function(automatico) {
	this.automatico = automatico;
};

Resistencia.prototype.setTemperatura = function(temperatura) {
	this.temperatura = temperatura;
};

Resistencia.prototype.setEstado = function(estado) {
	this.estado = estado;
};


/////////////// METODOS QUE SE UTILIZARAN DESDE FUERA ///////////////////////
Resistencia.prototype.cambiarValores = function(encendida, automatico, temperatura, temperaturaActual) {
	this.getEncendida(encendida);
	this.getAutomatico(automatico);
	this.temperatura(temperatura);

	this.actualizarEstado(temperaturaActual);
};

Resistencia.prototype.actualizarEstado = function(temperaturaActual) {
	if (this.temperatura >= temperaturaActual){
		this.setEstado(false);
	} else {
		this.setEstado(true);
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
