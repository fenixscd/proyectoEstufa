function Programador (resistencia, conexion, display){
	this.numero       = resistencia.getNumero();
	this.display			= display;
	this.resistencia  = resistencia;
	this.cuentaAtras  = 5000; // Si es falso es que no hay programa
	this.hora 	      = false; // Hora cambio tipo Date
  this.encender 	  = false; // En que stado esta si no hay valores
  this.temperatura  = false; // Que temperatura para el cambio
	this.temporizador = false;
	// this.iniciar();
	//this.iniciarTemporizador(this);
}


Programador.prototype.iniciar = function () {
	if (this.cuentaAtras == false){
		this.setHora(false);
		this.setEncender(false);
		this.setTemperatura(false);
	}else{
		this.iniciarTemporizador(this);
	}
	this.pintarHora();
	this.pintarTemperatura();
	this.pintarEncender();
};

Programador.prototype.cambiarValores = function(hora, encender, temperatura, cuentaAtras){
	this.setHora(hora);
	this.setEncender(encender);
	this.setTemperatura(temperatura);
	this.setCuentaAtras(cuentaAtras);
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



Programador.prototype.iniciarTemporizador = function (obj) {
	this.temporizador = setTimeout(function(){
		obj.cambiarResistencia(); // Llamar a si mismo cuando termine la cuenta a tras
	}, 5000);
};

Programador.prototype.pararTemporizador = function () {

};

Programador.prototype.cambiarResistencia = function () {
	this.resistencia.setConfiguracion(true, this.getEncender(), this.getTemperatura());
	console.log("Llama al temporizador" + this.numero);
};



///////////////////// PINTAR //////////////////

Programador.prototype.pintarHora = function () {
  pintar = "";
  if (this.getHora() && Boolean(this.cuentaAtras)){
    var pintar = this.getHora();
  }
	console.log("ProgramadorHora" + this.numero);
	this.display.cambiarValor(("ProgramadorHora" + this.numero), pintar);
};

Programador.prototype.pintarTemperatura = function () {
  pintar = "";
  if (this.getTemperatura() && Boolean(this.cuentaAtras)){
    var pintar = this.getTemperatura();
  }
	this.display.cambiarValor(("ProgramadorTemperatura" + this.numero), pintar);
};

Programador.prototype.pintarEncender = function () {
  pintar = ""; // Si no hay cuenta atras no pinta nada
  if (Boolean(this.cuentaAtras)){
		pintar = "OFF"; // Por defecto apagado
		if(this.getEncender()){ // Si es modo encendido
			pintar = " ON"
		}
  }
	this.display.cambiarValor(("ProgramadorEncender" + this.numero), pintar);
};
