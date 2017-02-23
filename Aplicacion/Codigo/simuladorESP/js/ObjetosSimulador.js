

 function generarValores(valor, suvir){
     valor = parseFloat(valor);
     var alearorio = Math.random();
     var calculado;

     if (suvir){
         calculado = valor + alearorio;
     }else{
         calculado = valor - alearorio;
     }
     return calculado.toFixed(1);
 }



 /* Clase resistencia
 * @param int numero numero de resistencia
 * @param bool estado Encendido on apagado off
 * @temperatura float toFixed(1) si no tinene temperatura null
 * @horaCambio Date solo hora si no tiene null
 * @horaTemperatura float toFixed(1) si no hay Date null
 */

function Resistencia(numero){
    this.numero = numero; // Numero de resistencia
    this.estado = false; // Encendido apagado
    this.temperatura  = false; // Temperatura a la que esta progrmada que ese pare.
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
      if (this.estado) {
        return this.temperatura;
      }
      return false;
    }

    this.getEncendida = function(){
      if (this.estado) {
        return this.encendida;
      }
      return false;
    }

    this.getHoraCambio = function(){
      return this.horaCambio;
    }

    this.getHoraEstado = function (){

      if (this.horaCambio !== null){
        return this.horaEstado;
      }
      return false;
    }

    this.getHoraTemperatura = function(){
      if (this.horaCambio !== null){
        return this.horaTemperatura;
      }
      return false;
    }


// Inicio seters

    this.setNumero = function (numero){
      this.numero = numero;
      return this;
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

function Estufa(mac){
    this.mac = mac;
    this.dispositivo; // Nombre
    this.conexion;
    this.temperatura;
    this.hemedad;
    this.resitencia1;
    this.resitencia2;

    this.getMac = function(){
      return this.mac;
    }

    this.getDispositivo = function(){
      return this.dispositivo;
    }
    this.getConexion = function(){
      return this.conexion;
    }
    this.getTemperatura = function(){
      return this.temperatura;
    }
    this.getHemedad = function(){
      return this.humedad;
    }
    this.getListaResitencias = function(){
      return this.listaResitencias;
    }

    this.getResitencia1 = function(){
      return this.resistencia1;
    }
    this.getResitencia2 = function(){
      return this.resistencia2;
    }

    this.setDispositivo = function(dispositivo){
      this.dispositivo = dispositivo;
      return this;
    }
    this.setConexion = function(conexion){
      this.conexion = conexion;
      return this;
    }
    this.setTemperatura = function(temperatura){
      this.temperatura = temperatura;
      return this;
    }
    this.setHemedad = function(humedad){
      this.humedad = humedad;
      return this;
    }

    this.setResitencia1 = function(resistencia1){
      this.resistencia1 = resistencia1;
      return this;
    }
    this.setResitencia2 = function(resistencia2){
      this.resistencia2 = resistencia2;
      return this;
    }
}



function ListaDispositivos(){
    var listaDispositivos = new Array();
}
/**
* Compruba si una mac ya a sido asignada.
* @param {String} mac dirección mac.
* @return {bool} true si existe false si no.
*/
ListaDispositivos.prototype.isExisteMAC = function (mac) {
  for (var dispositivo in listaDispositivos) {
    if (dispositivo.getMac === mac){
      return true;
    }
    return false;
  }
};

ListaDispositivos.prototype.generarMac = function () {
  var mac = "A6-B5-C4-D3"
  var calculado;
  for (i=0; i<2; i++){
    calculado = Math.random()*99; // Genera un numero a leatiroio entre 0 y 99 con decimales
    calculado = Math.floor(calculado) // Le quita los decimales.
    mac = mac + "-" + calculado;
  }
};

/**
* @param {Number} numero de dispositivos a generar.
*/
ListaDispositivos.prototype.genrarlistaDispositivos = function(numero){

  var mac;
  for(var i = 0; i < numero; i++) {
    do {
      console.log("Hola");

    } while (false);

    listaDispositivos.push(new Estufa(i));
  }
}
