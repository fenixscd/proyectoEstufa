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


function Resistencia(){
    this.nombre;
    this.estado;
    this.temperatura;
    this.horaCambio;
    this.HoraTemperatura;
}

Resitencia.prototype.setNombre = function(nombre){
    this.nombre = nombre;
}


function estufa (){
    this.dispositivo; // Nombre
    this.mac;
    this.conexion;
    this.temperatura;
    this.hemedad;
    this.listaResitencias = [];
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

function aumetarTemperatura {
    temperatura = temp.innerHTML;
    return generarValores(temperatura, true);
}

function disminuirTemperatura {
    temperatura = temp.innerHTML;
    return generarValores(temperatura, false);
}


function aumentarHumedad(){
    humedad =  hume.innerHTML;
    return generarValores(humedad, true);
}

function disminuirHumedad(){
    humedad =  hume.innerHTML;
    return generarValores(humedad, false);
}



function generarValores(){
    // Si las resistencia estan activas depende de que aumente o disminuya la temperatura.
    // Hay que parsear los valores de on off;
    var resistencia1 =  resis1Esta.innerHTML;
    var resistencia2 =  resis2Esta.innerHTML;
    
}

medicion = 25;
function enviarBucle(){
    window.setTimeout(enviarBucle, 1000);
    //console.log("Medicion: " +gerarValores(medicion));
    gerarValores(medicion);
}
