function Termostato(numero, display, conexion, resistencia) {
  this.conexion          = conexion;
  this.resistencia       = resistencia;
  this.numero            = numero;
  this.display           = display;
  this.estado            = false;
  this.temperatura       = 24;

  this.pintarEstado();
  this.pintarTemperatura();
}

Termostato.prototype.getTemperatura = function (){
  var temp = this.temperatura;
  if (temp == false || temp == null ) {
    temp = 0;
  }
  temp = parseFloat(temp);
  return temp.toFixed(1)
}

Termostato.prototype.getEstado = function () {
  return this.estado;
};

Termostato.prototype.setEstado = function (estado) {
  this.estado = estado;
  this.pintarEstado();
  this.enviarEstado();
};

Termostato.prototype.setTemperatura = function (temperatura) {
  this.temperatura = temperatura;
  this.pintarTemperatura();
  this.enviarTemperatura();
};

Termostato.prototype.getNTermostato = function () {
  return this.numero;
};

Termostato.prototype.isNTermostato = function (nTermostato) {
  if(this.numero == nTermostato) return true;
  return false;
};



Termostato.prototype.actualizarEstado = function (temperaturaActual) {
  if (this.estado){
    var  isTemperaturaSelec = false;
    if (parseFloat(this.getTemperatura()) >= parseFloat(temperaturaActual)) {
      isTemperaturaSelec = true;
    }
    this.resistencia.setEstado(isTemperaturaSelec);
  }
};

Termostato.prototype.pintarEstado = function () {
  var estadoTermostato = "OFF";

  if (this.getEstado()){
    estadoTermostato = "ON"
  }
  this.display.cambiarValor(("estadoTermostato" + this.numero), estadoTermostato);
};

Termostato.prototype.pintarTemperatura = function () {
  this.display.cambiarValor(("tempTermostato" + this.numero), (this.getTemperatura()+"º"));
};

Termostato.prototype.enviarEstado = function () {
  var datos = new Object();
  datos.command = "clientSetEstadoTermostato" + this.numero;
  datos.valor = this.getEstado();
  this.conexion.enviarMensaje(datos);
};

Termostato.prototype.enviarTemperatura = function () {
  var datos = new Object();
  datos.command = "clientSetTeperaturaTermostato" + this.numero;
  datos.valor = this.getTemperatura();
  this.conexion.enviarMensaje(datos);
};

Termostato.prototype.enviarValores = function () {
  this.enviarEstado();
  this.enviarTemperatura();
};
