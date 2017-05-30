function PeticionConfirmarConexion(conexion) {
  this.nombre      = "confirmarConexion";
  this.conexion    = conexion;
}

PeticionConfirmarConexion.prototype.getNombre = function () {
  return this.nombre;
};

PeticionConfirmarConexion.prototype.ejecutar = function() {
  return this.conexion.isConectado();
};
