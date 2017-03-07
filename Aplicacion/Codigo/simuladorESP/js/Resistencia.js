function Resistencia(numero){
    this.numero = numero; // Numero de resistencia
    this.estado = false; // Encendido apagado
    this.temperatura = false; // Temperatura a la que esta progrmada que ese pare.
    this.encendida = false; // Encaso del que el estado sea encendido indica si la resistencia esta en marcha o no.
    this.horaCambio = false; // Hora cambio tipo Date
    this.horaEstado = false; // En que stado esta si no hay valores
    this.horaTemperatura = false; // Que temperatura para el cambio


    // Metodos privilegiados
    this.getNumero = function() {
      return this.numero;
    }

    this.getEstado = function(){
      return this.estado;
    }

    this.getTemperatura = function(){
      return this.temperatura;
    }

    this.getEncendida = function(){
      if (this.estado !== false) {
        return this.encendida;
      }
      return false;
    }

    this.getHoraCambio = function(){
      return this.horaCambio;
    }

    this.getHoraEstado = function (){

      if (this.horaCambio !== false){
        return this.horaEstado;
      }
      return false;
    }

    this.getHoraTemperatura = function(){
      if (this.horaCambio !== false){
        return this.horaTemperatura;
      }
      return false;
    }

    this.setEstado = function(estado){
      this.estado = estado;
      return this;
    }

    this.setEncendida = function(encendida){
      this.encendida = encendida;
      return this;
    }
    this.setTemperatura = function(temperatura){
      this.Temperatura = temperatura;
      return this;
    }

    this.setHoraCambio = function(horaCambio){
      this.horaCambio = horaCambio;
      return this;
    }

    this.setHoraEstado = function(horaEstado){
      this.horaEstado = horaEstado
      return this;
    }

    this.setHoraTemperatura = function(horaTemperatura){
      this.horaTemperatura = horaTemperatura;
      return this;
    }
}

Resistencia.prototype.getJson = function () {
  return{
    "resiEencendida":this.getNumero(), // Numero de resistencia
    "resisEsta":this.getEstado(), // Encendido apagado
    "resisTemp":this.getTemperatura(), // Temperatura a la que esta progrmada que ese pare.
    "resisEncendida":this.getEncendida(), // Encaso del que el estado sea encendido indica si la resistencia esta en marcha o no.
    "hora":this.getHoraCambio(), // Hora cambio tipo Date
    "horaCambio":this.getHoraEstado(), // En que stado esta si no hay valores
    "horaTemp":this.getHoraTemperatura() // Que temperatura para el cambio
  };
};
