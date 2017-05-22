function PeticionConfirmarConexion(conexion) {
  this.nombre      = "confirmarConexion";
  this.conexion    = conexion;
}

PeticionConfirmarConexion.prototype.getNombre = function () {
  return this.nombre;
};

PeticionConfirmarConexion.prototype.ejecutar = function() {
  // Tengo que verificar quel el dispositivos tambien este conectado.
  // No solo que hay una conexion.
  return this.conexion.isConectado();
};
