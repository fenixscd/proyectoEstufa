var dispositivo = document.getElementById("dispositivo");
var modo = document.getElementById("modo");
var conexion = document.getElementById("conexion");
var temp = document.getElementById("temp");
var hume = document.getElementById("hume");

var resis1Esta = document.getElementById("resis1Esta");
var resis1Temp = document.getElementById("resis1Temp");
var hora1 = document.getElementById("hora1");
var hora1Cambio = document.getElementById("hora1Cambio");
var hora1Temp = document.getElementById("hora1Temp");

var resis2Esta = document.getElementById("resis2Esta");
var resis2Temp = document.getElementById("resis2Temp");
var hora2 = document.getElementById("hora2");
var hora2Cambio = document.getElementById("hora2Cambio");
var hora2Temp = document.getElementById("hora2Temp");

/*
 *
 */



function valoresDisplay (){
    console.log(dispositivo.innerHTML)
    console.log(modo.innerHTML)
    console.log(conexion.innerHTML)

    console.log(temp.innerHTML)
    console.log(hume.innerHTML)

    console.log(resis1Esta.innerHTML)
    console.log(resis1Temp.innerHTML)
    console.log(hora1.innerHTML)
    console.log(hora1Cambio.innerHTML)
    console.log(hora1Temp.innerHTML)

    console.log(resis2Esta.innerHTML)
    console.log(resis2Temp.innerHTML)
    console.log(hora2.innerHTML)
    console.log(hora2Cambio.innerHTML)
    console.log(hora2Temp.innerHTML)
}




function aumetarTemperatura() {
    var temperatura = temp.innerHTML;
    return generarValores(temperatura, true);
}

function disminuirTemperatura() {
    var temperatura = temp.innerHTML;
    return generarValores(temperatura, false);
}


function aumentarHumedad(){
    var humedad =  hume.innerHTML;
    return generarValores(humedad, true);
}

function disminuirHumedad(){
    var humedad =  hume.innerHTML;
    return generarValores(humedad, false);
}



function generarValores(){
    // Si las resistencia estan activas depende de que aumente o disminuya la temperatura.
    // Hay que parsear los valores de on off;
    var resistencia1 =  resis1Esta.innerHTML;
    var resistencia2 =  resis2Esta.innerHTML;

}

var medicion = 25;
function enviarBucle(){
    window.setTimeout(enviarBucle, 1000);
    //console.log("Medicion: " +gerarValores(medicion));
    generarValores(medicion);
}


function renombrarID(){
    console.log(temp.innerHTML);
    temp.innerHTML = "30";
    console.log(temp.innerHTML);
    temp.id = "otro";
    //console.log(temp.innerHTML);
    var otro = document.getElementById("otro");
    console.log(otro.innerHTML);
    otro.innerHTML = "35";
    console.log(otro.innerHTML);
}



function crearDisplay(mac){
    var contenedor = document.getElementsByTagName("section")[0];
    var dispositivo = document.createElement("div");
    dispositivo.setAttribute("class", "dispositivo");

    var contenido =`<div class="display">
                        <div class="lSuperior">
                            <h2><span id="dispositivo${mac}">ESTUFA HABITACI</span></h2>
                            <p><span id="modo${mac}">Auto</span> | <span id="conexion${mac}">DESCONEC</span></p>
                        </div>

                        <div class="medidas">
                            <h2>T: <span id="temp${mac}">40</span>º</h2>
                            <h2>H: <span id="hume${mac}">10</span>%</h2>
                        </div>

                        <div class="programacion">
                            <p class="izq">Resis 1: <span id="resis1Esta${mac}">ON</span> <span id="resis1Temp${mac}">27</span>º</p>
                            <p class="der">Hora <span id="hora1${mac}">6:25</span> <span id="hora1Cambio${mac}">OFF</span> <span id="hora1Temp${mac}">27</span>º</p>

                            <p class="izq">Resis 2: <span id="resis2Esta${mac}">OFF</span> <span id="resis2Temp${mac}"></span></p>
                            <p class="der">Hora <span id="hora2${mac}">6:25</span> <span id="hora2Cambio${mac}">ON</span> <span id="hora2Temp${mac}">27</span>º</p>
                        </div>

                    </div>
                </div>
                <div class="botonera">
                <form>
                    <input type="button" value="+" onclick="hacer_click()"/>
                    <input type="button" value="M" onclick="hacer_click()"/>
                    <input type="button" value="-" onclick="hacer_click()"/>
                </form>`;
    dispositivo.innerHTML = contenido;
    dispositivo.classList.add("dispositivo");
    contenedor.appendChild(dispositivo);
}
