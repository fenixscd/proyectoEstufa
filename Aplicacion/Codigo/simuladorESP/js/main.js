

// var termometro = new Termometro();
// var humedad = new Humedad();
//
// console.log("Mediciones: " + termometro.getMedicion());
// console.log("Mediciones: " + humedad.getMedicion());




function crearDispositivo() {
  var dispositivo = new esp8266();

  //console.log(dispositivo.peticionesLista.getPeticion("getTemperatura"));
  dispositivo.peticionesLista.getPeticion("getTemperatura").ejecutar();
}
