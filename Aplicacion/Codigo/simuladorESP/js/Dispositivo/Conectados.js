function Conectados(display, conexion) {
  this.conexion      = conexion;
  this.display       = display;
  this.nDispositivos = 0;
  this.bucle;

  this.pintarConectados();
}

Conectados.prototype.getNClientes = function () {
  return this.nDispositivos;
};

Conectados.prototype.addCliente = function () {
  this.nDispositivos++;
  // iniciar bucle
};

Conectados.prototype.rmCliente = function () {
  if (this.nDispositivos <= 0) {
    this.nDispositivos = 0;
  }
  this.nDispositivos--;
};

Conectados.prototype.continuarEnvado = function () {
  if (this.getNClientes() <= 0) return true
  else return false
};

Conectados.prototype.pintarConectados = function () {
  this.display.cambiarValor("totalConectados", this.getNClientes());
};
