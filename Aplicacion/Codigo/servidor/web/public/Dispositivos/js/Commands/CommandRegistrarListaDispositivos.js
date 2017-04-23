function CommandRegistrarListaDispositivos(listaDispositivos) {
  this.listaDispositivos = listaDispositivos;
  this.nombre      = "registrarDispositivos";
  this.datos       = new Object();
}

CommandRegistrarListaDispositivos.prototype.getNombre = function () {
  return this.nombre;
};

CommandRegistrarListaDispositivos.prototype.ejecutar = function() {
  this.listaDispositivos.registrarDispositivos();
};
