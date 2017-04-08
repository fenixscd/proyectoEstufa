function Peticiones(dispositivo){
  this.dispositivo = dispositivo;
  this.acciones;
}

Peticiones.prototype.ejecutar() = function (accion) {
  // Llamar al metodo
  // this.call([accion]);
  [].dispositivo.[accion]();
};

Peticiones.prototype.mac = function () {
  //return this.dispositivo.getMac();
  console.log(this.dispositivo.getMac());
};
