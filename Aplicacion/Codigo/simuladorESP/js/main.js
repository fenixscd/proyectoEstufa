console.log("Desde aqui se enviaran los datos, se civirarn y se reenderizara la vista");

// Voy a tener que haer el bucle en esta parte para que esa el propio evento.


// console.log("La temperatura es de: " + estufa.getTemperatura());
// console.log("La humedad es de: " + estufa.getHumedad());

var plantilla = '<div class="display">' +
        '<div class="lSuperior">' +
            '<h2><span id="dispositivo{{mac}}">{{mac}}</span></h2>' +
            '<p><span id="modo{{mac}}">Manual</span> | <span id="conexion{{mac}}">DESCONEC</span></p>' +
        '</div>' +
        '<div class="medidas">' +
            '<h2>T: <span id="temp{{mac}}">25.5</span>º</h2>' +
            '<h2>H: <span id="hume{{mac}}">10</span>%</h2>' +
        '</div>' +
        '<div class="programacion">' +
            '<p class="izq">Resis 1 [<span id="resis1encendida{{mac}}">*</span>]: <span id="resis1Esta{{mac}}">ON</span> <span id="resis1Temp{{mac}}">27</span>º</p>' +
            '<p class="der">Hora <span id="hora1{{mac}}">6:25</span> <span id="hora1Cambio{{mac}}">OFF</span> <span id="hora1Temp{{mac}}">27</span>º</p>' +

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
// Como hacer el renderizado tendra que ser desde la propia clase



var listaDispositivos = new ListaDispositivos();



function bucle (){
  window.setTimeout(function() {
    bucle();
  }, 2000);
  listaDispositivos.cambiarDatos();
  // listaDispositivos.showMACs();

  console.log("Bucle de 2 segundos");
}

function añadirHTMLDispositivo(macDispositvo, plantilla){
  var contenedor = document.getElementsByTagName("section")[0];
  var dispositivo = document.createElement("div");

  dispositivo.setAttribute("class", "dispositivo");
  dispositivo.innerHTML = plantilla.replace(/{{mac}}/g, macDispositvo);
  dispositivo.classList.add("dispositivo");
  contenedor.appendChild(dispositivo);
}

function 

function crearDispositivo(mac){
  var nuevoDispositivo = listaDispositivos.addDispositivo();

  añadirHTMLDispositivo(nuevoDispositivo.getMac(), plantilla);
  bucle();

  // Llamo al metodo addDispositivo de la lista
  // llamo al metod generar html del elemto que acavamos de añadir para genrar el html

  //estufa.bucleTemperatura(estufa);

}
