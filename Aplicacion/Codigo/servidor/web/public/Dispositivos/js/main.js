
var listaDispositivos = new ListaDispositivos();
var commandsLista     = new CommandsLista();
var conexion          = new Conexion(commandsLista);
var peticionesLista   = new PeticionesLista();

cargarListaDePeticiones();
cargarListaDeComandos();


function crearDispositivo() {
  var mac = "A6-B5-C4-D3-00-01";
  commandsLista.getCommand("crearDispositivo").ejecutar(mac, peticionesLista);
  // Programa principal se encargar de crear los dispositivos

}

function cargarListaDePeticiones(){
  peticionesLista.addPeticion(new PeticionGetTemperatura(conexion));
  peticionesLista.addPeticion(new PeticionConfirmarConexion(conexion));
  peticionesLista.addPeticion(new PeticionRegistrarDispositivos(conexion));

}

function cargarListaDeComandos(){
  commandsLista.addCommand(new CommandCrearDispositivo(listaDispositivos));
  commandsLista.addCommand(new CommandCambiarTemperatura(listaDispositivos));
  commandsLista.addCommand(new CommandCambiarEstadoConexion(listaDispositivos));



}
