function Resitencia (encendida, automatico, temperatura, temperaturaActual){
  this.encendida   = false; // Si tiene que estar en modo endendida
  this.automatico  = false; // Si esta en modo automatico realiza las hoperaciones con la hora si no no lo hace
  this.temperatura = false; // Temperatura de funcionamiento;
  this.estado 	   = false; // Encendida cuando la temperatura no es la soliciata apagada si la temperatura es igula o superior a al necesitada.
  this.cambiarValores(encendida, automatico, temperatura, temperaturaActual);
}


Resitencia.prototype.getEncendida = function() {
	return this.encendida;
};

Resitencia.prototype.getAutomatico = function() {
	return this.automatico;
};

Resitencia.prototype.getTemperatura = function() {
	return this.temperatura;
};

Resitencia.prototype.getEstado = function() {
	return this.estado;
};

// Seters --------

Resitencia.prototype.setEncendida = function(encendida) {
	this.encendida = encendida;
};

Resitencia.prototype.setAutomatico = function(automatico) {
	this.automatico = automatico;
};

Resitencia.prototype.setTemperatura = function(temperatura) {
	this.temperatura = temperatura;
};

Resitencia.prototype.setEstado = function(estado) {
	this.estado = estado;
};

Resitencia.prototype.actualizarEstado = function(temperaturaActual) {
	if (this.temperatura >== temperaturaActual){
		this.setEstado(false);
	} else {
		this.setEstado(true);
	}
};


/////////////// METODOS QUE SE UTILIZARAN DESDE FUERA ///////////////////////

Resitencia.prototype.cambiarValores = function(encendida, automatico, temperatura, temperaturaActual) {
	this.getEncendida(encendida);
	this.getAutomatico(automatico);
	this.temperatura(temperatura);

	this.actualizarEstado();
};

Resitencia.prototype.getJSON = function() {
	return{
    	"encendida":this.getEncendida(),
		"automatico":this.getAutomatico(),
		"temperatura":this.getTemperatura(),
		"estado":this.getEstado()
  };
};



