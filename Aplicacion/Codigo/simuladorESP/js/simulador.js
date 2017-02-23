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


 function generarValores(valor, suvir){
     valor = parseFloat(valor);
     var alearorio = Math.random();
     var calculado;

     if (suvir){
         calculado = valor + alearorio;
     }else{
         calculado = valor - alearorio;
     }
     return calculado.toFixed(1);
 }



 /* Clase resistencia
 * @param int numero numero de resistencia
 * @param bool estado Encendido on apagado off
 * @temperatura float toFixed(1) si no tinene temperatura null
 * @horaCambio Date solo hora si no tiene null
 * @horaTemperatura float toFixed(1) si no hay Date null
 */

function Resistencia(numero){
    this.numero = numero; // Numero de resistencia
    this.estado; // Encendido apagado
    this.temperatura; // Temperatura a la que esta progrmada que ese pare.
    this.horaCambio; // Hora cambio tipo Date
    this.horaEstado; // En que stado esta si no hay valores
    this.horaTemperatura; // Que temperatura para el cambio

    // Metodos privilegiados
    this.getNumero = function() {
      return this.numero;
    }

    this.setNumero = function (numero){
      this.numero = numero;
      return this;
    }

    this.getEstado = function(){
      return this.estado;
    }

    this.setEstado = function(estado){
      this.estado = estado;
      return this;
    }

    this.getTemperatura = function(){
      if (this.estado) {
        return this.temperatura;
      }
      return null;
    }

    this.setTemperatura = function(temperatura){
      this.Temperatura = temperatura;
      return this;
    }

    this.gethoraCambio = function(){
      return this.horaCambio;
    }

    this.sethoraCambio = function(horaCambio){
      this.horaCambio = horaCambio;
      return this;
    }

    this.getHoraEstado = function (){

      if (this.horaCambio !== null){
        return this.horaEstado;
      }
      return null;
    }

    this.setHoraEstado = function(horaEstado){
      this.horaEstado = horaEstado
      return this;
    }

    this.getHoraTemperatura = function(){
      if (this.horaCambio !== null){
        return this.horaTemperatura;
      }
      return null;
    }

    this.setHoraTemperatura = function(horaTemperatura){
      this.horaTemperatura = horaTemperatura;
      return this;
    }

}

Resistencia.prototype.generarValores = function () {
  this.setEstado(true)
      .setTemperatura(22)
      .sethoraCambio(null)
      .setHoraEstado(null);
      .horaTemperatura(null);
};

function Estufa(mac){
    this.mac = mac;
    this.dispositivo; // Nombre
    this.conexion;
    this.temperatura;
    this.hemedad;
    this.resitencia1;
    this.resitencia2;

    this.getDispositivo = function(){
      return this.dispositivo;
    }
    this.getConexion = function(){
      return this.conexion;
    }
    this.getTemperatura = function(){
      return this.temperatura;
    }
    this.getHemedad = function(){
      return this.humedad;
    }
    this.getListaResitencias = function(){
      return this.listaResitencias;
    }

    this.getResitencia1 = function(){
      return this.resistencia1;
    }
    this.getResitencia2 = function(){
      return this.resistencia2;
    }

    this.setDispositivo = function(dispositivo){
      this.dispositivo = dispositivo;
      return this;
    }
    this.setConexion = function(conexion){
      this.conexion = conexion;
      return this;
    }
    this.setTemperatura = function(temperatura){
      this.temperatura = temperatura;
      return this;
    }
    this.setHemedad = function(humedad){
      this.humedad = humedad;
      return this;
    }

    this.setResitencia1 = function(resistencia1){
      this.resistencia1 = resistencia1;
      return this;
    }
    this.setResitencia2 = function(resistencia2){
      this.resistencia2 = resistencia2;
      return this;
    }
}

Estufa.prototype.generarValores = function () {
  this.setDispositivo(this.mac).
      .setConexion(false).
      .setTemperatura(25).
      .setHemedad(15).
      .setResitencia1(new Resistencia(1).generarValores()).
      .setResitencia2(new Resistencia(2).generarValores()).
};


function ListaDispositivos(){
    var listaDispositivos = new Array();
}

ListaDispositivos.prototype.genrarlistaDispositivos = function(numero){
    for(var i = 0; i < numero; i++) {
        listaDispositivos.push(new estufa(i));
    }
}



Resistencia.prototype.setNombre = function(nombre){
    this.nombre = nombre;
}


function Estufa (){
    this.dispositivo; // Nombre
    this.mac;
    this.conexion;
    this.temperatura;
    this.hemedad;
    this.listaResitencias = new Array();
}



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
