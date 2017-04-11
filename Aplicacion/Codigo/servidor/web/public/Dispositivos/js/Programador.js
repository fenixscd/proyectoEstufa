function Programador (resistencia, conexion, display){
	this.numero       = resistencia.getNumero();
	this.display			= display;
	this.resistencia  = resistencia;
	this.cuentaAtras  = false; // Si es falso es que no hay programa
	this.hora 	      = false; // Hora cambio tipo Date
  this.encender 	  = false; // En que stado esta si no hay valores
  this.temperatura  = false; // Que temperatura para el cambio
	this.temporizador = false;
}


Programador.prototype.iniciar = function () {
	if (this.cuentaAtras == false){
		this.setHora(false);
		this.setEncender(false);
		this.setTemperatura(false);
	}else{
		this.iniciarTemporizador(this);
	}
	this.pintarValores();
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
Programador.prototype.isCambioEstadoCuentaAtras = function (cuentaAtras) {
	return Boolean(this.cuentaAtras) != Boolean(cuentaAtras);
};

Programador.prototype.setCuentaAtras = function (cuentaAtras) {
	// console.log("Llaman a cuenta a tras prog " + this.numero);
	// console.log("Timepo asignado " + cuentaAtras);
	if (this.isCambioEstadoCuentaAtras(cuentaAtras)){ // Si es un cambio de estato
		  this.cuentaAtras = cuentaAtras;
		  if (Boolean(cuentaAtras) == false) this.pararTemporizador(); // Si el cambio se hace a false  paro el temporizador
			else this.iniciarTemporizador(this); // Si el cambio es a tiempo iniciamos el la cuenta con el tiempo obtenido

	}else{ // No es un cambio de estado
		  if (Boolean(cuentaAtras) != false){
				 this.pararTemporizador();
				 this.iniciarTemporizador(this);
		  }
	}
	this.pintarValores();
};

// ACCIONES CONTRA LA RESITENCIA

Programador.prototype.iniciarTemporizador = function (obj) {
	// console.log("Cuenta atras " + this.cuentaAtras);
	//console.log("Cuenta atras numero " + this.numero);
	this.temporizador = setTimeout(function(){
		obj.cambiarResistencia()
	} , this.cuentaAtras);
};

Programador.prototype.pararTemporizador = function () {
	clearTimeout(this.cuentaAtras);
	this.cuentaAtras = false;
};

Programador.prototype.cambiarResistencia = function () {
	this.resistencia.cambioTemporizador(this.getEncender(), this.getTemperatura());
	/// Llamar al servidor para que actualice los datos
	//---------------------------------------------------------
	            this.cambiarValores(false, false, false, false); //-------------------------
	//---------------------------------------------------------
	// console.log("Cambia al temporizador" + this.numero);
};


///////////////////// PINTAR //////////////////

Programador.prototype.pintarHora = function () {
  pintar = "";
  if (this.getHora() && Boolean(this.cuentaAtras)){
    var pintar = this.getHora();
  }
	// console.log("ProgramadorHora" + this.numero);
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

Programador.prototype.pintarValores = function () {
	this.pintarHora();
	this.pintarTemperatura();
	this.pintarEncender();
};
