
var listaDispositivos = new ListaDispositivos();
var commandsLista     = new CommandsLista();
var conexion          = new Conexion(commandsLista);
var peticionesLista   = new PeticionesLista();

cargarListaDePeticiones();
cargarListaDeComandos();

function ejecutarPeticion(mac, pe){
  // Mirar los parametros
  commandsLista.getCommand("crearDispositivo").ejecutar(mac, peticionesLista);
}

function crearDispositivo() {
  var mac = "A6-B5-C4-D3-00-01";
  commandsLista.getCommand("crearDispositivo").ejecutar(mac, peticionesLista);
  // Programa principal se encargar de crear los dispositivos
}

function cargarListaDePeticiones(){
  peticionesLista.addPeticion(new PeticionGetTemperatura(conexion));
  peticionesLista.addPeticion(new PeticionConfirmarConexion(conexion));
  peticionesLista.addPeticion(new PeticionRegistrarDispositivos(conexion));
  peticionesLista.addPeticion(new PeticionAumentarTemp(conexion));
  peticionesLista.addPeticion(new PeticionDisminuirTemp(conexion));
  peticionesLista.addPeticion(new PeticionCambiarEstadoTermostato(conexion));
  peticionesLista.addPeticion(new PeticionCambiarNombreDispositivo(conexion));
}

function cargarListaDeComandos(){
  commandsLista.addCommand(new CommandCrearDispositivo(listaDispositivos));
  commandsLista.addCommand(new CommandCambiarEstadoConexion(listaDispositivos));
  commandsLista.addCommand(new CommandSetTemperatura(listaDispositivos));
}

var listaDeMacs = ["A6-B5-C4-D3-00-01", "A6-B5-C4-D3-00-02", "A6-B5-C4-D3-00-03",
                   "A6-B5-C4-D3-00-04", "A6-B5-C4-D3-00-05", "A6-B5-C4-D3-00-06",
                   "A6-B5-C4-D3-00-07", "A6-B5-C4-D3-00-08", "A6-B5-C4-D3-00-09",
                   "A6-B5-C4-D3-00-10", "A6-B5-C4-D3-00-11", "A6-B5-C4-D3-00-12",
                   "A6-B5-C4-D3-00-13", "A6-B5-C4-D3-00-14", "A6-B5-C4-D3-00-15",
                   "A6-B5-C4-D3-00-16", "A6-B5-C4-D3-00-17", "A6-B5-C4-D3-00-18",
                   "A6-B5-C4-D3-00-19", "A6-B5-C4-D3-00-20", "A6-B5-C4-D3-00-21",
                   "A6-B5-C4-D3-00-22", "A6-B5-C4-D3-00-23", "A6-B5-C4-D3-00-24",
                   "A6-B5-C4-D3-00-25", "A6-B5-C4-D3-00-26", "A6-B5-C4-D3-00-27",
                   "A6-B5-C4-D3-00-28", "A6-B5-C4-D3-00-29", "A6-B5-C4-D3-00-30",
                   "A6-B5-C4-D3-00-31", "A6-B5-C4-D3-00-32", "A6-B5-C4-D3-00-33",
                   "A6-B5-C4-D3-00-34", "A6-B5-C4-D3-00-35", "A6-B5-C4-D3-00-36",]

function CargarLista() {
  // for (var i = 0; i < listaDeMacs.length; i++){
  for (var i = 0; i < 3; i++){
    commandsLista.getCommand("crearDispositivo").ejecutar(listaDeMacs[i], peticionesLista);
  }
}
