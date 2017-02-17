dispositivo = document.getElementById("dispositivo");
modo = document.getElementById("modo");
conexion = document.getElementById("conexion");
temp = document.getElementById("temp");
hume = document.getElementById("hume");

resis1Esta = document.getElementById("resis1Esta");
resis1Temp = document.getElementById("resis1Temp");
hora1 = document.getElementById("hora1");
hora1Cambio = document.getElementById("hora1Cambio");
hora1Temp = document.getElementById("hora1Temp");

resis2Esta = document.getElementById("resis2Esta");
resis2Temp = document.getElementById("resis2Temp");
hora2 = document.getElementById("hora2");
hora2Cambio = document.getElementById("hora2Cambio");
hora2Temp = document.getElementById("hora2Temp");

//kk

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



// Retorna un número aleatorio entre min (incluido) y max (excluido)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function gerarValores(valor){
    var numPosibilidades = (valor+1) - (valor-1) 
   	var aleat = Math.random() * numPosibilidades
    console.log("Antes del round: " + aleat);
   	aleat = Math.round(aleat);
    console.log("Aleatorio: " + aleat);
//    parseFloat
//   	return parseInt(inferior) + aleat 
}

function generarTemperatura(){
    temperatura = temp.innerHTML;
    temperatura = getRandomArbitrary (temperatura, (temperatura+1));
}

function generarHumedad(){
    humedad =  hume.innerHTML;
    humedad = getRandomArbitrary (humedad, (humedad+1));
}

medicion = 25;
function enviarBucle(){
    window.setTimeout(enviarBucle, 1000);
    //console.log("Medicion: " +gerarValores(medicion));
    gerarValores(medicion);
}
enviarBucle();
