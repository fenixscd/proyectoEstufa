function Display (mac){
  this.mac = mac;

  this.datos = new Array();
}

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
  console.log("Clave: "+ clave + " Valor " + valor);
  var mac = this.mac;
  setTimeout(function(){
        document.getElementById(clave + mac).innerHTML = valor;
    },10);
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

                      '<div>' +
                        '<p class="izq">Resis 1 [<span id="estadoResitencia1{{mac}}">*</span>]: <span id="estadoTermostato1{{mac}}">ON</span> <span id="tempTermostato1{{mac}}">27</span>º</p>' +
                      '</div>' +

                      '<div>' +
                        '<p class="izq">Resis 2 [<span id="estadoResitencia2{{mac}}"> </span>]: <span id="estadoTermostato2{{mac}}">OFF</span> <span id="tempTermostato2{{mac}}"></span></p>' +
                      '</div>' +
                      '</div>' +
                      '</div>' +
                      '<div class="botonera">' +
                        '<form>' +
                          '<input type="button" value="+" onclick="hacer_click()"/>' +
                          '<input type="button" value="M" onclick="hacer_click()"/>' +
                          '<input type="button" value="-" onclick="hacer_click()"/>' +
                          '</form>';
  return plantilla.replace(/{{mac}}/g, this.mac);
};
