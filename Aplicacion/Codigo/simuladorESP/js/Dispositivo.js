function Dispositivo(){
  this.resistencia1 = new Resistencia(1);
  this.resistencia2 = new Resistencia(2);
  this.estufa = new Estufa(this.resistencia1, this.resistencia2);
  this.union = new Union(this);
  this.union.añadirHTMLDispositivo(); //DESOMENTAR CUANDO YA FUNCIONE
  // console.log(this.parseParaPintar());
  
  this.mac = this.estufa.getMac();

  function bucle (obj){
    window.setTimeout(function() {
      bucle(obj);
    }, 2000);
    obj.estufa.cambiarMediciones();
    // obj.estufa.pintarDatosConsola();
    // console.log(obj.parseParaPintar());
    // console.log(obj.parseParaPintar());

  }
  bucle(this);
}

Dispositivo.prototype.getEstufa = function () {
  return this.estufa;
};

Dispositivo.prototype.isMacEquals = function (mac) {
  if (this.estufa.GetMac() === mac){
    return true;
  }
  return false;
};

Dispositivo.prototype.GetMac = function() {
  return this.estufa.GetMac();
};

Dispositivo.prototype.getEstufa = function () {
  return this.estufa;
};


Dispositivo.prototype.getJson = function () {
  return {
    "estufa" : this.estufa.getJson(),
    "resistencia1":this.resistencia1.getJson(),
    "resistencia2":this.resistencia2.getJson()
  };
};
// Crear el json parseado para pintor
Dispositivo.prototype.parseParaPintarEstufa = function () {
  var mac = this.estufa.getDispositivo();

  var arrayParseado = new Array();
  arrayParseado["dispositivo" + mac ] = this.estufa.getDispositivo();

  if (this.estufa.getModoAutomatico()){
    arrayParseado["modo" + mac ] = "Auto";
  }else{
    arrayParseado["modo" + mac ] = "Man";
  }




  return arrayParseado;
  // {
    // "dispositivo${mac}":this.estufa.getDispositivo(),
    // "modo":this.estufa.getModoAutomatico(),
    // "conexion":this.estufa.getConexion(),
    // "temp":this.estufa.getTemperatura(),
    // "hume":this.estufa.getHumedad()
    // };


};


// Dispositovo.prototype.ParaParseo = function() {
//   // body...
// };

// Dispositivo.prototype.pintarDispositivo = function (plantilla) {

// };

// Dispositivo.prototype.parsearParaPintar = function () {

// };
