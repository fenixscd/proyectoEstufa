function Display (esp8266){
  this.esp8266 = esp8266;
}

Display.prototype.generarDispositivo = function () {

};

Display.prototype.cambiarValores = function () {

};

Display.prototype.parsearParaPintar = function () {

};


Union.prototype.generarHTML = function () {
  var plantilla = '<div class="display">' +
                      '<div class="lSuperior">' +
                        '<h2><span id="dispositivo{{mac}}">{{mac}}</span></h2>' +
                        '<p><span id="modoAutomatico{{mac}}">Manual</span> | <span id="conexion{{mac}}">DESCONEC</span></p>' +
                      '</div>' +
                      '<div class="medidas">' +
                        '<h2>T: <span id="temperatura{{mac}}">25.5</span>º</h2>' +
                        '<h2>H: <span id="humedad{{mac}}">10</span>%</h2>' +
                      '</div>' +
                      '<div class="programacion">' +
                        '<p class="izq">Resis 1 [<span id="resistenciaEndida1{{mac}}">*</span>]: <span id="resis1Esta{{mac}}">ON</span> <span id="resis1Temp{{mac}}">27</span>º</p>' +
                        '<p class="der">Hora <span id="hora1{{mac}}">6:25</span> <span id="horaCambio1{{mac}}">OFF</span> <span id="hora1Temp{{mac}}">27</span>º</p>' +
                        '<p class="izq">Resis 2 [<span id="resis2encendida{{mac}}"> </span>]: <span id="resis2Esta{{mac}}">OFF</span> <span id="resis2Temp{{mac}}"></span></p>' +
                        '<p class="der">Hora <span id="hora2{{mac}}">6:25</span> <span id="hora2Cambio{{mac}}">ON</span> <span id="hora2Temp{{mac}}">27</span>º</p>' +
                      '</div>' +
                      '</div>' +
                      '</div>' +
                      '<div class="botonera">' +
                        '<form>' +
                          '<input type="button" value="+" onclick="hacer_click()"/>' +
                          '<input type="button" value="M" onclick="hacer_click()"/>' +
                          '<input type="button" value="-" onclick="hacer_click()"/>' +
                          '</form>';
  return plantilla.replace(/{{mac}}/g, this.dispositivo.getEstufa().getMac());
};
