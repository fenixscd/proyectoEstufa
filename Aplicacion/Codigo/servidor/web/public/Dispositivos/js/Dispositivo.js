function Dispositivo(mac, peticionesLista){
  this.mac             = mac;
  this.display         = new Display(this.mac);
  this.peticionesLista = peticionesLista;
  this.conexion        = false;
  this.bucle;

  this.display.añadirHTMLDispositivo();
  this.actualizarElEsadoDeLaConexion();

  // Al crear el dispositivos pregunto si estoy conectado
}

Dispositivo.prototype.actualizarElEsadoDeLaConexion = function () {
  var estdo = this.peticionesLista.getPeticion("confirmarConexion").ejecutar();
  this.setConexion(estdo);
};


Dispositivo.prototype.setConexion = function(conexion) {
  console.log("Dispositivo setConesion: " + conexion);
  if(conexion){
    this.peticionesLista.getPeticion("registrarDispositivo").ejecutar(this.mac);
    this.buclePeticiones(this);
  }else {
    this.detenerBucle();
  }
  this.conexion = conexion;
};

Dispositivo.prototype.getMac = function() {
  this.mac;
};

Dispositivo.prototype.detenerBucle = function () {
  clearInterval(this.bucle);
};

Dispositivo.prototype.buclePeticiones = function(obj) {
  console.log("Estoy en el bucle");
  this.bucle = window.setInterval(function() {
    obj.peticionesLista.getPeticion("getTemperatura").ejecutar(obj.mac);
  }, 5000);
};

Dispositivo.prototype.getDisplay = function () {
  return this.display;
};
