function Display (mac){
  this.mac = mac;

  this.datos = new Array();
}

Display.prototype.cambiarValor = function(clave, valor) {
  var mac = this.mac;
  if (document.getElementById(clave + mac) != null){
    document.getElementById(clave + mac).innerHTML = valor;
  }else {
    console.log("No existe el clave \"" + clave + "\" en le HTML");
  }
};

Display.prototype.añadirHTMLDispositivo = function () {
  var contenedor = document.getElementsByTagName("article")[0];
  var dispositivo = document.createElement("div");
  dispositivo.setAttribute("class", "dispositivo");

  dispositivo.innerHTML = this.generarHTML();
  dispositivo.classList.add("dispositivo");
  contenedor.appendChild(dispositivo);
};

Display.prototype.generarHTML = function () {
  var plantilla = '<div class="display">' +
                    '<div class="lSuperior">' +
                      '<form>' +
                        '<input type="button" name="00" value="<" onclick="peticionesLista.getPeticion(`cambiarNombreDispositivo`).ejecutar(`{{mac}}`, this.form.children[1].value)"/>' +
                        '<input class="nombre" type="text" name="nombreDispositivo{{mac}}" value="{{mac}}">' +
                      '</form>' +
                      '<p><span id="estadoConexion{{mac}}">DESCONEC</span></p>' +
                    '</div>' +

                    '<div class="medidas">' +
                        '<h2>T: <span id="temperatura{{mac}}">25.5</span>º</h2>' +
                        '<h2>H: <span id="humedad{{mac}}">10</span>%</h2>' +
                    '</div>' +

                    '<div class="ultimoBloque">' +
                      '<form>' +
                        '<div class="izq">' +
                          'Resis 1 [<span id="estadoResitencia1{{mac}}">*</span>]' +
                        '</div>' +

                        '<div class="cnt">' +
                          '<input type="button" value="ON" onclick="cambiarEstado(`{{mac}}`,1 , this.value)"/>' +
                        '</div>' +

                        '<div class="der">' +
                          '<input type="button" value="+" onclick="peticionesLista.getPeticion(`aumentarTemp`).ejecutar(`{{mac}}`, 1)"/>' +
                          '<p id="tempTermostato1{{mac}}">25.2</p>' +
                          '<input type="button" value=" - " onclick="peticionesLista.getPeticion(`disminuirTemp`).ejecutar(`{{mac}}`, 1)"/>' +
                        '</div>' +
                      '</form>' +

                      '<form>' +
                        '<div class="izq">' +
                          'Resis 2 [<span id="estadoResitencia2{{mac}}"> </span>]' +
                        '</div>' +

                        '<div class="cnt">' +
                          '<input type="button" value="OFF" onclick="cambiarEstado(`{{mac}}`, 2, this.value)"/>' +
                        '</div>' +



                        '<div class="der">' +
                          '<input type="button" value="+" onclick="peticionesLista.getPeticion(`aumentarTemp`).ejecutar(`{{mac}}`, 2)"/>' +
                          '<p id="tempTermostato2{{mac}}">100</p>' +
                          '<input type="button" value=" - " onclick="peticionesLista.getPeticion(`disminuirTemp`).ejecutar(`{{mac}}`, 2)"/>' +
                        '</div>' +
                      '</form>' +
                    '</div>' +
                '</div>';

  return plantilla.replace(/{{mac}}/g, this.mac);
};



// Display.prototype.pintarValores = function() {
//   var valorPintar;
//   for (dato in this.datos){
//       valorPintar = this.datos[dato][1]; // Valor verdadero
//       if (this.datos[dato][0] === false){
//         valorPintar = this.datos[dato][2]; // Para falso
//       }
//       document.getElementById(dato + this.mac).innerHTML = valorPintar;
//   }
// };
