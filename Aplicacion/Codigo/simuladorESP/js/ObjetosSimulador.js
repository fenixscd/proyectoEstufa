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
    this.temperatura; // Temperatura a la que esta progrmada que ese pare.
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

/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
/******************************************************************************/


function Estufa(){
    this.mac;
    this.dispositivo; // Nombre
    this.conexion;
    this.temperatura;
    this.humedad;
    this.resistencia1 = new Resistencia(1);
    this.resistencia2 = new Resistencia(2);
    this.temperaturaMaxima = 40;
    this.temperaturaMinima = 10;
    this.humedadMaxima = 99;
    this.humedadMinima = 1;
    this.generarMac();

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
      return parseFloat(this.temperatura).toFixed(1);
    }
    this.getHumedad = function(){

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
      this.temperatura = this.getEntreValores(temperatura, this.temperaturaMaxima, this.temperaturaMinima);
      
      /// SI LLEGA LA MAXIMO HAY QUE FORZAR EL APAGADO
      return this;
    }
    this.setHumedad = function(humedad){
      this.humedad = this.getEntreValores(temperatura, this.humedadMaxima, this.humedadMinima);
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


    this.temperaturaInicial();
    this.humedadInicial();
    this.cambiarTemperatura(this);
    this.bucleTemperatura(this);

    //this.bucleTemperatura(this);
}

Estufa.prototype.generarMac = function () {
  var mac = "A6-B5-C4-D3"
  var calculado;
  var longitud;
  calculado = Math.random()*9999; // Genera un numero a leatiroio entre 0 y 9999 con decimales
  calculado = Math.floor(calculado) // Le quita los decimales.
  calculado = calculado.toString();
  longitud = calculado.length;

  for (i=0; i<(4-longitud); i++){
    calculado = "0" + calculado;
  }
    mac = mac + "-" + calculado.substr(0,2);
    mac = mac + "-" + calculado.substr(2,3);
    this.mac = mac;
};

  Estufa.prototype.cambiarTemperatura = function () {
    var resistencia1 = this.resistencia1.getEstado();
    var resistencia2 = this.resistencia2.getEstado();
    var multiplicador = -1;
    var valorRandom = Math.random();
    var total;
    if (!resistencia1) multiplicador++;
    if (!resistencia2) multiplicador++;

    if (multiplicador > -1){
      multiplicador++;
    }
    valorRandom = valorRandom * multiplicador;

    total =  parseFloat(this.getTemperatura()) + parseFloat(valorRandom);
    this.setTemperatura(total);
  };

  Estufa.prototype.cambiarHumedad = function () {
    // Un random para que suva de manera aleatoria
    var valorRandom = (Math.random()*2)-1;
    var total = parseFloat(this.getHumedad()) + parseFloat(valorRandom);
    this.setHumedad(total);
    console.log("La nueva humedad es de: " + this.getHumedad());
  };

  Estufa.prototype.bucleTemperatura = function(_this) {
    window.setTimeout(function() {
      _this.bucleTemperatura(_this);
    }, 2000);
    this.cambiarTemperatura();
    this.cambiarHumedad();
    console.log("Temperatura calculada: " + this.getTemperatura(_this));
  };

Estufa.prototype.temperaturaInicial = function (){
  var valor = this.generarValorEntreDosNumeros(this.temperaturaMaxima, this.temperaturaMinima);
  this.setTemperatura(valor.toFixed(1));
};

Estufa.prototype.humedadInicial = function (){
  var valor = this.generarValorEntreDosNumeros(this.humedadMaxima, this.humedadMinima);
  this.humedad = valor.toFixed(0);
};

Estufa.prototype.generarValorEntreDosNumeros  = function(max, min){
  return Math.random() * (max - min) + min;
};

Estufa.prototype.getEntreValores = function (cantidad, cantidadMaxima, cantidadMinima) {
  var resultado = cantidad;
  if (cantidad >= cantidadMaxima){
    resultado = cantidadMaxima;
  }else if (resultado <= cantidadMinima) {
    resultado = cantidadMinima;
  }
  return resultado;
};





/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
/******************************************************************************/

function ListaDispositivos(){
     this.listaDispositivos = new Array();
}

ListaDispositivos.prototype.getTotalDispositivos = function () {
  return this.listaDispositivos.length;
};
/**
* Compruba si una mac ya a sido asignada.
* @param {String} mac dirección mac.
* @return {bool} true si existe false si no.
*/
ListaDispositivos.prototype.isExisteMAC = function (mac) {
  for (var dispositivo in this.listaDispositivos) {
    if (dispositivo.getMac === mac){
      return true;
    }
    return false;
  }
};

/**
* Antes de añadir verificamos que la mac no este duplicada.
*/
ListaDispositivos.prototype.addDispositivo = function () {
  var estufa;
  var mac = estufa.getMac();

  do {
    estufa = new Estufa();
    mac = estufa.getMac();
  } while (this.isExisteMAC(mac));

  this.listaDispositivos.push(estufa);
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

ListaDispositivos.prototype.showMACs = function () {
  for (var i = 0; i < this.listaDispositivos.length; i++) {
    console.log(this.listaDispositivos[i].getMac());
  }
};
