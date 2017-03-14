function Programador (resistencia, display){
	this.numero = resistencia.getNumero();
	this.resistencia = resistencia;
	this.hora 	     = false; // Hora cambio tipo Date
  this.encender 	 = false; // En que stado esta si no hay valores
  this.temperatura = false; // Que temperatura para el cambio
  this.automatico  = false; // Si esta en modo automatico realiza las hoperaciones con la hora si no no lo hace
}

Programador.prototype.getNumero = function () {
	return this.nuemro;
};

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

Programador.prototype.cambiarValores = function(hora, encender, temperatura, automatico, temperaturaActual){
	this.setHora(hora);
	this.setEncender(encender);
	this.setTemperatura(temperatura);
	this.setAutomatico(automatico);
}

/**
* Para si hay que hacer el cambio de estado
*/
Programador.prototype.isHoraDelCambio = function(horaActual) {
	if (this.hora >= horaActual){
		return true;
	}else{
		return false;
	}
};


Programador.prototype.isCambioEstadoResistencia = function(horaActual) {

};

Programador.prototype.cambiarEstadoEstufaHora = function(horaActual) {
	// Cambio el estado y reseteo los valores a cero
};


Programador.prototype.cambiarValores = function(hora, encender, temperatura, automatico, resistencia) {
	// body...
};

Programador.prototype.actualizarEstado = function(hora) {

};


Programador.prototype.getJSON = function () {

};
