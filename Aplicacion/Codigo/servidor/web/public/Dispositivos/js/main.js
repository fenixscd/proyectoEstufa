
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
  peticionesLista.addPeticion(new PeticionAumentarTemp(conexion));
  peticionesLista.addPeticion(new PeticionDisminuirTemp(conexion));
  peticionesLista.addPeticion(new PeticionCambiarEstadoTermostato(conexion));
  peticionesLista.addPeticion(new PeticionCambiarNombreDispositivo(conexion));
  peticionesLista.addPeticion(new PeticionGetEstadoDispConec(conexion));
  peticionesLista.addPeticion(new PeticionValoreIniciales(conexion));
  peticionesLista.addPeticion(new PeticionListaDispo(conexion));


}

function cargarListaDeComandos(){
  commandsLista.addCommand(new CommandCrearDispositivo(listaDispositivos, peticionesLista));
  commandsLista.addCommand(new CommandCambiarEstadoConexion(listaDispositivos));
  commandsLista.addCommand(new CommandSetTemperatura(listaDispositivos));
  commandsLista.addCommand(new CommandClientSetTermostatoTemp(listaDispositivos));
  commandsLista.addCommand(new CommandClientSetTermostatoEstado(listaDispositivos));
  commandsLista.addCommand(new CommandClientSetResitenciaEstado(listaDispositivos));
  commandsLista.addCommand(new CommandClientSetHumedad(listaDispositivos));
  commandsLista.addCommand(new CommandClientSetEstadoDispConec(listaDispositivos));
  commandsLista.addCommand(new CommandSetNombreDispositivo(listaDispositivos));
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
  var parametros=[];
  for (var i = 0; i < 3; i++){
    parametros["mac"]=listaDeMacs[i];
    commandsLista.getCommand("crearDispositivo").ejecutar(parametros);
  }
}

function CargarListaServidor(usuario){
  console.log(usuario);
  var datos     = new Object();
  datos.usuario = usuario;
  datos.command = "clientGenerarDisp";
  conexion.enviarMensaje(JSON.stringify(datos));
}

function cambiarEstado(mac, nTermostato, valor){
  var nuevoEstado;
  if (valor == "ON"){
    nuevoEstado = false;
  }else{
    nuevoEstado = true
  }
  peticionesLista.getPeticion("cambiarEstadoTermostato").ejecutar(mac, nTermostato, nuevoEstado);
}
