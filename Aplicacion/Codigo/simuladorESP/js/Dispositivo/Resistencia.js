function Resistencia (numero, conexion, display){
  this.conexion	            = conexion;
  this.display	            = display;
  this.numero               = numero;
  this.estado               = false;
  this.datos                = new Object();

  this.pintarEstado();
  this.enviarEstado();
}

Resistencia.prototype.getNombre = function () {
  return ("estadoResitencia" + this.numero);
};

Resistencia.prototype.getNumero = function () {
  return this.numero;
};

Resistencia.prototype.getEstado = function () {
  return this.estado;
};

Resistencia.prototype.setEstado = function (nuevoEstado) {
  if (this.estado != nuevoEstado){
    this.estado = nuevoEstado;
    this.pintarEstado();
    this.enviarEstado();
    // Enviar nuevo estado
  }
};

Resistencia.prototype.pintarEstado = function () {
  var estadoResitencia = " ";

  if (this.getEstado()){
    estadoResitencia = "*"
  }
  this.display.cambiarValor(("estadoResitencia" + this.numero), estadoResitencia);
};

Resistencia.prototype.enviarEstado = function () {
  this.datos.command = "setClientEstadoResitencia" + this.numero;
  this.datos.valor = this.getEstado();
  this.conexion.enviarMensaje(this.datos);
};
