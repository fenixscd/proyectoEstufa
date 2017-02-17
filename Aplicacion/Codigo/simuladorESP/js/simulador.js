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


// Retorna un número aleatorio entre min (incluido) y max (excluido)
//function getRandomArbitrary(min, max) {
//  return Math.random() * (max - min) + min;
//}

function wait(nsegundos) {
objetivo = (new Date()).getTime() + 1000 * Math.abs(nsegundos);
while ( (new Date()).getTime() < objetivo );
};

//do {
//    console.log("Dentro del bucle");
//    wait(5);
//} while (true);




