

// var termometro = new Termometro();
// var humedad = new Humedad();
//
// console.log("Mediciones: " + termometro.getMedicion());
// console.log("Mediciones: " + humedad.getMedicion());

var conexion          = new Conexion();
var listaDispositivos = new ListaDispositivos();
var commandsLista     = new CommandsLista();
var peticionesLista   = new PeticionesLista();

cargarListaDePeticiones(conexion);

commandsLista.addCommand(new CommandCrearDispositivo())

function crearDispositivo() {
  var mac = "84.255.224.22";
  commandsLista.getCommand("crearDispositivo").ejecutar(mac, listaDispositivos, peticionesLista);
  // Programa principal se encargar de crear los dispositivos

}


function cargarListaDePeticiones(conexion){
  peticionesLista.addPeticion(new PeticionGetTemperatura(conexion));
}
