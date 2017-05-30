function Dispositivo(mac, peticionesLista){
  this.mac             = mac;
  this.display         = new Display(this.mac);
  this.peticionesLista = peticionesLista;
  this.conexion        = false;
  this.conexionDisp    = false;
  // this.bucle;

  this.display.añadirHTMLDispositivo();
  this.actualizarElEsadoDeLaConexion();
}

Dispositivo.prototype.actualizarEstadoDispConec = function () {
  var estdo = this.peticionesLista.getPeticion("confirmarConexion").ejecutar();
  this.setConexion(estdo);
};

Dispositivo.prototype.actualizarElEsadoDeLaConexion = function () {
  var estdo = this.peticionesLista.getPeticion("confirmarConexion").ejecutar();
  this.setConexion(estdo);
};

Dispositivo.prototype.setConexionDisp = function (conexionDisp) {
  this.conexionDisp = conexionDisp;
  this.pintarConexionDispositivo();

  if(conexionDisp){
    this.peticionesLista.getPeticion("valoresInciales").ejecutar(this.mac);
  }

};

Dispositivo.prototype.getConexionDisp = function () {
  return this.conexionDisp;
};

Dispositivo.prototype.setConexion = function(conexion) {
  console.log("Dispositivo setConexion: " + conexion);
  if(conexion){
    this.peticionesLista.getPeticion("registrarDispositivo").ejecutar(this.mac);
    this.peticionesLista.getPeticion("getEstadoDispConec").ejecutar(this.mac);
    // this.buclePeticiones(this);
  }else {
    //this.detenerBucle();
  }
  this.conexion = conexion;
};

Dispositivo.prototype.getMac = function() {
  return this.mac;
};

Dispositivo.prototype.getDisplay = function () {
  return this.display;
};

Dispositivo.prototype.pintarConexionDispositivo = function () {
  var valor = "DESCONEC";
  if (this.conexionDisp) {
    valor = "CONEC";
  }
  this.display.cambiarValor("estadoConexion", valor);
};

Dispositivo.prototype.solicitarValoreIniciales = function () {

};




// Dispositivo.prototype.detenerBucle = function () {
//   clearInterval(this.bucle);
// };

// Dispositivo.prototype.buclePeticiones = function(obj) {
//   console.log("Estoy en el bucle");
//   this.bucle = window.setInterval(function() {
//     obj.peticionesLista.getPeticion("getTemperatura").ejecutar(obj.mac);
//   }, 5000);
// };
