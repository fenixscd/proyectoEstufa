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



// Determina si hay un cambio de comportamiento no un cambio en la cuenta atras
Programador.prototype.isCambioEstadoCuentaAtras = function () {
	return Boolean(this.getCuentaAtras()) != Boolean(cuentaAtras);
};

Programador.prototype.setCuentaAtras = function (cuentaAtras) {
	// Si es un cambio de estato
	if (this.isCambioEstadoCuentaAtras()){
		  if (Boolean(cuentaAtras) == false){ // Si el cambio se hace a false  paro el temporizador
			    // Parar temporizador
		  }else{ // Si el cambio es a tiempo iniciamos el la cuenta con el tiempo obtenido
			    // Iniciar temporizacion
		  }
		 // pintar display
		 this.cuentaAtras = cuentaAtras;
	}else{ // No es un cambio de estado
		  if (Boolean(cuentaAtras) != false){
				 // Cambiar tiempo de del temporizador
				     // Seguramente abra que pararlo y volver a arrancarlo
		  }
	  }
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
    }, 5000);
};

Programador.prototype.cambiar = function () {
	// Realizar cambio
	// Solicitar nueva hora de cambio
	// Ejecuar denuevo el bucle con el nuevo tiempo
	console.log("Llama al temporizador");
};
