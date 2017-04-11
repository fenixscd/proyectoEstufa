

// var termometro = new Termometro();
// var humedad = new Humedad();
//
// console.log("Mediciones: " + termometro.getMedicion());
// console.log("Mediciones: " + humedad.getMedicion());

var conexion          = new Conexion();
var listaDispositivos = new ListaDispositivos();
var commandsLista     = new CommandsLista();

commandsLista.addCommand(new CommandCrearDispositivo())

function crearDispositivo() {
  var mac = "84.255.224.22";
  commandsLista.getCommand("crearDispositivo").ejecutar(mac, listaDispositivos);
  // Programa principal se encargar de crear los dispositivos

}
