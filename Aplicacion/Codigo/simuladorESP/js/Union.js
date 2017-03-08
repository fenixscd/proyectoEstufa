function Union(dispositivo) {
  this.dispositivo = dispositivo;
  this.plantilla;
  this.generarPlantilla();
}
Union.prototype.generarPlantilla = function () {
  console.log("Entra dentro del generador de plantilla");
  this.plantilla = '<div class="display">' +
                      '<div class="lSuperior">' +
                        '<h2><span id="dispositivo{{mac}}">{{mac}}</span></h2>' +
                        '<p><span id="modo{{mac}}">Manual</span> | <span id="conexion{{mac}}">DESCONEC</span></p>' +
                      '</div>' +
                      '<div class="medidas">' +
                        '<h2>T: <span id="temp{{mac}}">25.5</span>º</h2>' +
                        '<h2>H: <span id="hume{{mac}}">10</span>%</h2>' +
                      '</div>' +
                      '<div class="programacion">' +
                        '<p class="izq">Resis 1 [<span id="resisEncendida1{{mac}}">*</span>]: <span id="resis1Esta{{mac}}">ON</span> <span id="resis1Temp{{mac}}">27</span>º</p>' +
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
};



Union.prototype.añadirHTMLDispositivo = function () {
  var contenedor = document.getElementsByTagName("section")[0];
  var dispositivo = document.createElement("div");

  dispositivo.setAttribute("class", "dispositivo");
  this.plantilla = this.plantilla.replace(/{{mac}}/g, this.dispositivo.getEstufa().getMac());
  console.log(this.plantilla);
  dispositivo.classList.add("dispositivo");
  contenedor.appendChild(dispositivo);
};
