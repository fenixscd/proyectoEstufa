function Programador (resistencia, numero){
	this.numero = numero;
	this.hora 	     = false; // Hora cambio tipo Date
    this.encender 	 = false; // En que stado esta si no hay valores
    this.temperatura = false; // Que temperatura para el cambio
    this.automatico  = false; // Si esta en modo automatico realiza las hoperaciones con la hora si no no lo hace
    this.resistencia = resistencia;
}

Programador.prototype.getHora = function() {
	return this.hora;
};

Programador.prototype.getEncender = function() {
	if (this.hora === false){
		return false;
	}
	return this.encender;
};

Programador.prototype.getTemperatura = function() {

	if (this.hora === false){
		return false;
	}
	return this.temperatura;	
};

Programador.prototype.getAutomatico = function() {
	return this.automatico;
};

Programador.prototype.setHora = function(hora) {
	this.hora = hora;
};

Programador.prototype.setEncender = function(encender) {
	this.encender = encender;
};

Programador.prototype.setTemperatura = function(temperatura) {
	this.temperatura = temperatura;
};

Programador.prototype.setAutomatico = function(automatico) {
	this.automatico = automatico;
};


// ACCIONES CONTRA LA RESITENCIA


/**
* Para si hay que hacer el cambio de estado 
*/
Programadro.prototype.isCambioEstadoEstufa = function(horaActual) {
	
};

Programadro.prototype.cambiarEstadoEstufaHora = function(horaActual) {
	// Cambio el estado y reseteo los valores a cero
};

