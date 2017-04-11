

// var termometro = new Termometro();
// var humedad = new Humedad();
//
// console.log("Mediciones: " + termometro.getMedicion());
// console.log("Mediciones: " + humedad.getMedicion());




function crearDispositivo() {

  // Programa principal se encargar de crear los dispositivos
  
  var dispositivo = new Dispositivo();

  //console.log(dispositivo.peticionesLista.getPeticion("getTemperatura"));
  dispositivo.commandsLista.getCommand("solicitarTemperatura").ejecutar();
}
