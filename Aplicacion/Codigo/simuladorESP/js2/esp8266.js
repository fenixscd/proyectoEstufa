function esp8266(){
  this.mac = this.generarMac();
  this.nombreDispositivo = false;
  this.modoAutomatico    = false;

  this.display      = new Display(this)
  this.conexion     = new Conexion(this, this.display);
  this.termometro   = new Termometro(this.conexion, this.display);
  this.humedad      = new Humedad(this.conexion, this.display);
  this.resistencia1 = new Resistencia(1, this.conexion, this.display, this.termometro);
  this.resistencia2 = new Resistencia(2, this.conexion, this.display, this.termometro);
  this.programador1 = new Programador(this.resistencia1, this.conexion, this.display);
  this.programador2 = new Programador(this.resistencia2, this.conexion, this.display);


  this.display.añadirHTMLDispositivo();
  this.iniciarComponenetes();
  this.actualizarMediciones(this) // Bucle para que se vallan actualizando las mediciones
}

esp8266.prototype.iniciarComponenetes = function () {
  this.programador1.iniciar();
  this.programador2.iniciar();
  this.resistencia1.iniciar();
  this.resistencia2.iniciar();

  // this.resistencia1.setModoManual(true);
  // this.resistencia1.setModoEncendido(true);
  // this.resistencia1.setTemperatura(30);
  //
  // this.resistencia2.setModoManual(false);
  // this.resistencia2.setModoEncendido(false);
  // this.resistencia2.setTemperatura(31);
};



esp8266.prototype.getMac = function() {
  return this.mac;
};

esp8266.prototype.setMac = function(mac) {
  this.mac = mac;
};

esp8266.prototype.getNombreDispositivo = function () {
  if (this.nombreDispositivo == false){
    return this.getMac();
  }else {
    return this.nombreDispositivo;
  }
};

esp8266.prototype.setNombreDispositivo = function (nombreDispositivo) {
  this.nombreDispositivo = nombreDispositivo;
};

esp8266.prototype.isResistenciaEncendida = function () {
  if (this.resistencia1.getResistenciaEncendida() || this.resistencia2.getResistenciaEncendida()) return true;
  else return false;
};

esp8266.prototype.actualizarMediciones = function (obj) {
    window.setTimeout(function() {
      obj.actualizarMediciones(obj); // Llamar a si mismo cuando termine la cuenta a tras
    }, 1000);
      obj.termometro.actualizarMedicion(obj.isResistenciaEncendida());
      obj.humedad.actualizarEstado();
      obj.resistencia1.actualizarEstado(obj.termometro.getMedicion());
      obj.resistencia2.actualizarEstado(obj.termometro.getMedicion());
};




esp8266.prototype.solicirarDatosIniciales = function () {

};

esp8266.prototype.generarMac = function () {
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
    this.setMac(mac);
    return mac;
};
