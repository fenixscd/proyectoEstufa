function Resistencia (numero, conexion, display, termometro){
  this.conexion	            = conexion;
  this.display	            = display;
  this.numero               = numero;
  this.estado               = false;
  this.resistenciaEncendida = false;
}

Resistencia.prototype.getNumero = function () {
  return this.numero;
};

Resistencia.prototype.getEstado = function () {
  return this.estado;
};

Resistencia.prototype.setEstado = function (nuevoEstado) {
  // console.log("Resitencia encender " + this.getNumero()+ " estado " + this.getResistenciaEncendida() + resistenciaEncendida);
  if (this.estado != nuevoEstado){
    this.estado = nuevoEstado;
    this.pintarEstado();
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
