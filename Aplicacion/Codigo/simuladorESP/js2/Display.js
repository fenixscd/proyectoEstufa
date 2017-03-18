function Display (esp8266){
  this.esp8266 = esp8266;
  this.mac = this.esp8266.getMac();

  this.datos = new Array();
  // this.cargarCorrespondencia();
}

// Display.prototype.cargarCorrespondencia = function () {
//   this.datos["dispositivo"] = [this.esp8266.getNombreDispositivo(),this.esp8266.getNombreDispositivo(),""];
//   this.datos["modoAutomatico"] = [this.esp8266.getModoAutomatico(), "Auto", "Manu"];
//   this.datos["conexion"] = [this.esp8266.getModoAutomatico(), "Conec", "Desc"];
//   this.datos["temperatura"] = [this.esp8266.termometro.getMedicion(),this.esp8266.termometro.getMedicion(), ""];
//   this.datos["humedad"] = [this.esp8266.humedad().getMedicion(),this.esp8266.humedad().getMedicion(),""];
// };

Display.prototype.pintarValores = function() {
  var valorPintar;
  for (dato in this.datos){
      valorPintar = this.datos[dato][1]; // Valor verdadero
      if (this.datos[dato][0] === false){
        valorPintar = this.datos[dato][2]; // Para falso
      }
      document.getElementById(dato + this.mac).innerHTML = valorPintar;
  }
};

Display.prototype.cambiarValor = function(clave, valor) {
  document.getElementById(clave + this.mac).innerHTML = valor;
};

Display.prototype.añadirHTMLDispositivo = function () {
  var contenedor = document.getElementsByTagName("section")[0];
  var dispositivo = document.createElement("div");
  dispositivo.setAttribute("class", "dispositivo");

  dispositivo.innerHTML = this.generarHTML();
  dispositivo.classList.add("dispositivo");
  contenedor.appendChild(dispositivo);

  // this.pintarValores();
};

Display.prototype.generarHTML = function () {
  var plantilla = '<div class="display">' +
                      '<div class="lSuperior">' +
                        '<h2><span id="dispositivo{{mac}}">{{mac}}</span></h2>' +
                        '<p><span id="conexion{{mac}}">DESCONEC</span></p>' +
                      '</div>' +
                      '<div class="medidas">' +
                        '<h2><span id="temperatura{{mac}}"></span>º</h2>' +
                        '<h2><span id="humedad{{mac}}">10</span>%</h2>' +
                      '</div>' +
                      '<div class="programacion">' +
                        '<p class="izq"><span id="resistenciaAutomatico1{{mac}}"></span> Res1 [<span id="resistenciaEstado1{{mac}}"></span>]: <span id="resistenciaEncendida1{{mac}}"> </span> <span id="resistenciaTemperatura1{{mac}}"></span></p>' +
                        '<p class="der">Hora <span id="ProgramadorHora1{{mac}}">6:25</span> <span id="ProgramadorEncender1{{mac}}"> </span> <span id="ProgramadorTemperatura1{{mac}}">27</span>º</p>' +
                        '<p class="izq"><span id="resistenciaAutomatico2{{mac}}"></span> Res2 [<span id="resistenciaEstado2{{mac}}"> </span>]: <span id="resistenciaEncendida2{{mac}}"></span> <span id="resistenciaTemperatura2{{mac}}"></span></p>' +
                        '<p class="der">Hora <span id="ProgramadorHora2{{mac}}">6:25</span> <span id="ProgramadorEncender2{{mac}}">ON</span> <span id="ProgramadorTemperatura2{{mac}}">27</span>º</p>' +
                      '</div>' +
                      '</div>' +
                      '</div>' +
                      '<div class="botonera">' +
                        '<form>' +
                          '<input type="button" value="+" onclick="hacer_click()"/>' +
                          '<input type="button" value="M" onclick="hacer_click()"/>' +
                          '<input type="button" value="-" onclick="hacer_click()"/>' +
                          '</form>';
  return plantilla.replace(/{{mac}}/g, this.esp8266.getMac());
};
