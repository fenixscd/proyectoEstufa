function Display (mac){
  this.mac = mac;
  this.añadirHTMLDispositivo();
}


Display.prototype.cambiarValor = function(clave, valor) {
  // Retardo
  var mac = this.mac;
    setTimeout(function(){
      if (document.getElementById(clave + mac) != null){
          document.getElementById(clave + mac).innerHTML = valor;
        }else {
          console.log("No existe el clave \"" + clave + "\" en le HTML");
        }
      },100);

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
                        '<h2><span id="nombreDispositivo{{mac}}"></span></h2>' +
                        '<p><span id="estadoConexion{{mac}}"></span></p>' +
                      '</div>' +
                      '<div class="medidas">' +
                        '<h2><span id="temperatura{{mac}}"></span>º</h2>' +
                        '<h2><span id="humedad{{mac}}">10</span>%</h2>' +
                      '</div>' +




                      '<div class="ultimoBloque">' +
                        '<p class= "izq">Resis 1 [<span id="estadoResitencia1{{mac}}"></span>]: <span id="estadoTermostato1{{mac}}"></span> <span id="tempTermostato1{{mac}}"></span></p>' +
                        '<p class= "izq">Resis 2 [<span id="estadoResitencia2{{mac}}"></span>]: <span id="estadoTermostato2{{mac}}"></span> <span id="tempTermostato2{{mac}}"></span></p>' +
                      '</div>' +

                      '<div class="ultimoBloque">' +
                        '<p class= "der">Total Conectados</p>' +
                        '<p class= "der"><span id="totalConectados{{mac}}"></span></p>' +
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
