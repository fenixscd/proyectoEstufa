

// var termometro = new Termometro();
// var humedad = new Humedad();
//
// console.log("Mediciones: " + termometro.getMedicion());
// console.log("Mediciones: " + humedad.getMedicion());


function pruebasConBoleanos(){
  var numero = 0;
  var numero2 = false;
  console.log(Boolean(numero));

  if (numero = true){
    console.log("El numero lo considera como true");
  }else {
    console.log("El numero lo considera como falso");
  }
  console.log("Si a convertido el numero " + numero);
}



function crearDispositivo() {
  var dispositivo = new esp8266();
  // pruebasConBoleanos();
}
