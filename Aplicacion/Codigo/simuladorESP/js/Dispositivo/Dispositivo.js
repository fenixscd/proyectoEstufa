function Dispositivo(mac){
  this.tipoDispositivo   = "estufa"
  if (mac == undefined) this.mac = this.generarMac();
  else this.mac = mac;

  this.nombreDispositivo = false;
  this.numClientes         = 0;

  this.commandsLista   = new CommandsLista();
  this.display         = new Display(this.mac);
  this.conexion        = new Conexion(this, this.display, this.commandsLista);
  this.termometro      = new Termometro(this.display, this.conexion, this);
  this.humedad         = new Humedad(this.display, this.conexion, this);
  this.resistencia1    = new Resistencia(1, this.display, this.conexion);
  this.resistencia2    = new Resistencia(2, this.display, this.conexion);
  this.termostato1     = new Termostato(1, this.display, this.conexion, this.resistencia1);
  this.termostato2     = new Termostato(2, this.display, this.conexion, this.resistencia2);
  // this.Conectados      = new Conectados(this.display, this.conexion);

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

Dispositivo.prototype.getNumClientes = function () {
  return this.numClientes;
};

Dispositivo.prototype.setNumClientes = function (numClientes) {
  this.numClientes = numClientes;
  this.pintarNumClientes();
};

Dispositivo.prototype.getNombreDispositivo = function () {
  if (this.nombreDispositivo == false){
    return this.getMac();
  }else {
    return this.nombreDispositivo;
  }
};

Dispositivo.prototype.isClientesConectados = function () {
  if (this.numClientes > 0) return true;
  return false;
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

Dispositivo.prototype.getTermostato = function (nTermostato) {
  if (this.termostato1.isNTermostato(nTermostato)) return this.termostato1;
  if (this.termostato2.isNTermostato(nTermostato)) return this.termostato2;
  console.log("No se ha encontrado el termostato con el numero " + nTermostato);
};


Dispositivo.prototype.aumentarTemp = function (termostato) {
  var termostato = termostato;
  termostato.setTemperatura(parseFloat(termostato.temperatura) + 0.1);
};

Dispositivo.prototype.disminuirTemp = function (termostato) {
  var termostato = termostato;
  termostato.setTemperatura(parseFloat(termostato.temperatura) - 0.1);
};

// Termostato.prototype.aumentarTemp = function () {
//   this.temperatura = parseFloat(this.temperatura) + 0.1;
//   this.enviarTemperatura();
//   this.pintarTemperatura();
// };

Dispositivo.prototype.actualizarMediciones = function (obj) {
    window.setInterval(function() {
      obj.termometro.actualizarMedicion(obj.isResistenciaEncendida());
      obj.humedad.cambiarHumedad();
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
  this.commandsLista.addCommand(new CommandAumentarTemp(this));
  this.commandsLista.addCommand(new CommandDisminuirTemp(this));
  this.commandsLista.addCommand(new CommandCambiarEstadoTermostato(this));
  this.commandsLista.addCommand(new CommandCambiarNombreDispositivo(this));
  this.commandsLista.addCommand(new CommandCambiarNumClientes(this));
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

Dispositivo.prototype.pintarNombreDispositivo = function () {
  this.display.cambiarValor("nombreDispositivo", this.getNombreDispositivo());
};

Dispositivo.prototype.pintarNumClientes = function () {
  this.display.cambiarValor("totalConectados", this.getNumClientes());
};

Dispositivo.prototype.enviarValores = function () {
  var datos = new Object();
  datos.command = "clientSetNombreDispositivo";
  datos.valor = this.getNombreDispositivo();
  this.conexion.enviarMensaje(datos);
};
