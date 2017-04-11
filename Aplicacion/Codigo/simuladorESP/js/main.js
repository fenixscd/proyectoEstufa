

// var termometro = new Termometro();
// var humedad = new Humedad();
//
// console.log("Mediciones: " + termometro.getMedicion());
// console.log("Mediciones: " + humedad.getMedicion());




function crearDispositivo() {

  //console.log(dispositivo.peticionesLista.getPeticion("getTemperatura"));
  dispositivo.commandsLista.getCommand("enviarTemperatura").ejecutar();
}
