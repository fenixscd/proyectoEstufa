function Dispositivo(mac){
  this.tipoDispositivo   = "estufa"
  if (mac == undefined) this.mac = this.generarMac();
  else this.mac = mac;

  this.nombreDispositivo = false;

  this.commandsLista   = new CommandsLista();
  this.display         = new Display(this.mac);
  this.conexion        = new Conexion(this, this.display, this.commandsLista);
  this.termometro      = new Termometro(this.display, this.conexion);
  this.humedad         = new Humedad(this.display, this.conexion);
  this.resistencia1    = new Resistencia(1, this.display, this.conexion);
  this.resistencia2    = new Resistencia(2, this.display, this.conexion);
  this.termostato1     = new Termostato(1, this.display, this.conexion, this.resistencia1);
  this.termostato2     = new Termostato(2, this.display, this.conexion, this.resistencia2);
  this.Conectados      = new Conectados(this.display, this.conexion);

  this.addCommands();
  this.actualizarMediciones(this) // Bucle para que se vallan actualizando las mediciones
  this.pintarNombreDispositivo()
}

Dispositivo.prototype.getTipoDispositivo = function () {
  return this.tipoDispositivo;
};

Dispositivo.prototype.getMac = function() {
  return this.mac;
};

Dispositivo.prototype.getConexion = function () {
  return this.conexion;
};

Dispositivo.prototype.setMac = function(mac) {
  this.mac = mac;
};

Dispositivo.prototype.getNombreDispositivo = function () {
  if (this.nombreDispositivo == false){
    return this.getMac();
  }else {
    return this.nombreDispositivo;
  }
};

Dispositivo.prototype.setNombreDispositivo = function (nombreDispositivo) {
  this.nombreDispositivo = nombreDispositivo;
  this.pintarNombreDispositivo();
  this.enviarNombreDispositivo();
};

Dispositivo.prototype.isResistenciaEncendida = function () {
  if (this.resistencia1.getEstado() || this.resistencia2.getEstado()) return true;
  else return false;
};

Dispositivo.prototype.actualizarMediciones = function (obj) {
    window.setInterval(function() {
      obj.termometro.actualizarMedicion(obj.isResistenciaEncendida());
      obj.humedad.actualizarEstado();
      obj.termostato1.actualizarEstado(obj.termometro.getMedicion());
      obj.termostato2.actualizarEstado(obj.termometro.getMedicion());
    }, 1000);
};

Dispositivo.prototype.generarMac = function () {
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

Dispositivo.prototype.addCommands = function () {
  this.commandsLista.addCommand(new CommandGetTemperatura(this));
};

Dispositivo.prototype.conexionAbierta = function () {
  this.termostato1.enviarValores();
  this.termostato2.enviarValores();
  this.resistencia1.enviarValores();
  this.resistencia2.enviarValores();
  this.termometro.enviarValores();
  this.enviarValores();
  this.humedad.enviarValores();
};

Dispositivo.prototype.conexionCerrada = function () {
  // Terminar bucle
};

Dispositivo.prototype.conectadosClientes = function () {

};

Dispositivo.prototype.desconectadosClientes = function () {

};


Dispositivo.prototype.pintarNombreDispositivo = function () {
  this.display.cambiarValor("nombreDispositivo", this.getNombreDispositivo());
};

Dispositivo.prototype.enviarValores = function () {
  var datos = new Object();
  datos.command = "setClientNombreDispositivo";
  datos.valor = this.getNombreDispositivo();
  this.conexion.enviarMensaje(datos);
};
