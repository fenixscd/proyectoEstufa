function Resitencia (){
  this.encendida   = false; // Si tiene que estar en modo endendida
  this.automatico  = false; // Si esta en modo automatico realiza las hoperaciones con la hora si no no lo hace
  this.temperatura = false; // Temperatura de funcionamiento;
  this.estado 	   = false; // Encendida cuando la temperatura no es la soliciata apagada si la temperatura es igula o superior a al necesitada.
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






Resitencia.prototype.isEqualsTeperatura = function() {
	// Verificamos que la temperatura es igual o superior a la especificada
	// Si es igula o superior la apagamos y si no la encendemos

};

Resitencia.prototype.cambiarEstado = function() {
	// Cambio el estado y reseteo los valores a cero
};