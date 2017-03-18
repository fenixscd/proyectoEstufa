function Programador (resistencia, conexion, display){
	this.numero       = resistencia.getNumero();
	this.resistencia  = resistencia;
	this.cuentaAtras  = false; // Si es falso es que no hay programa
	this.hora 	      = false; // Hora cambio tipo Date
  this.encender 	  = false; // En que stado esta si no hay valores
  this.temperatura  = false; // Que temperatura para el cambio
}

Programador.prototype.getNumero = function () {
	return this.nuemro;
};

Programador.prototype.getHora = function() {
	return this.hora;
};

Programador.prototype.getEncender = function() {
	return this.encender;
};

Programador.prototype.getTemperatura = function() {
	return this.temperatura;
};

Programador.prototype.getCuentaAtras = function () {
	return this.cuentaAtras;
};

//////////////// SETERS ////////////////////

Programador.prototype.setHora = function(hora) {
	this.hora = hora;
};

Programador.prototype.setEncender = function(encender) {
	this.encender = encender;
};

Programador.prototype.setTemperatura = function(temperatura) {
	this.temperatura = temperatura;
};

Programador.prototype.setCuentaAtras = function (cuentaAtras) {
	this.cuentaAtras = cuentaAtras;
};

// ACCIONES CONTRA LA RESITENCIA

Programador.prototype.cambiarValores = function(hora, encender, temperatura, cuentaAtras){
	this.setHora(hora);
	this.setEncender(encender);
	this.setTemperatura(temperatura);
	this.setCuentaAtras(cuentaAtras);
}

Programador.prototype.temporizador = function (obj) {
    window.setTimeout(function() {
      obj.cambiar(obj); // Llamar a si mismo cuando termine la cuenta a tras
    }, 1000);
};

Programador.prototype.cambiar = function () {
	// Realizar cambio
	// Solicitar nueva hora de cambio
	// Ejecuar denuevo el bucle con el nuevo tiempo
	console.log("Llama al temporizador");
};
