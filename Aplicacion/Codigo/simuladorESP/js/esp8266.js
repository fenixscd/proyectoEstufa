function esp8266(mac){
  this.tipoDispositivo   = "estufa"
  if (mac == undefined) this.mac = this.generarMac();
  else this.mac = mac;

  this.nombreDispositivo = false;
  this.modoAutomatico    = false;

  this.commandsLista   = new CommandsLista();
  this.display         = new Display(this.mac);
  this.conexion        = new Conexion(this.mac);
  this.termometro      = new Termometro(this.display);
  this.humedad         = new Humedad(this.conexion, this.display);
  this.resistencia1    = new Resistencia(1, this.conexion, this.display, this.termometro);
  this.resistencia2    = new Resistencia(2, this.conexion, this.display, this.termometro);


  this.display.añadirHTMLDispositivo();
  this.iniciarComponenetes();
  this.actualizarMediciones(this) // Bucle para que se vallan actualizando las mediciones
  this.addCommands();
}

esp8266.prototype.iniciarComponenetes = function () {
  this.resistencia1.iniciar();
  this.resistencia2.iniciar();
};

esp8266.prototype.getTipoDispositivo = function () {
  return this.tipoDispositivo;
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

esp8266.prototype.addCommands = function () {
  this.commandsLista.addCommand(new CommandEnviarTemperatura(this))
};


esp8266.prototype.setNombreDispositivo = function (nombreDispositivo) {
  this.nombreDispositivo = nombreDispositivo;
};

esp8266.prototype.isResistenciaEncendida = function () {
  if (this.resistencia1.getResistenciaEncendida() || this.resistencia2.getResistenciaEncendida()) return true;
  else return false;
};

esp8266.prototype.actualizarMediciones = function (obj) {
    window.setInterval(function() {
      obj.termometro.actualizarMedicion(obj.isResistenciaEncendida());
      obj.humedad.actualizarEstado();
      obj.resistencia1.actualizarEstado(obj.termometro.getMedicion());
      obj.resistencia2.actualizarEstado(obj.termometro.getMedicion());
    }, 1000);
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

///////// Peticiones
