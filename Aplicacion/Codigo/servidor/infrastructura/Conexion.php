<?php
namespace infrastructura;

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

use SplObjectStorage;
use infrastructura\Commands\CommandLista;
use infrastructura\Commands\CommandRegistrar;

class Conexion implements MessageComponentInterface {
    private $clients;
    private $listaDispositivos;
    private $commandLista;


    public function __construct() {
        $this->clients = new SplObjectStorage; // SplObjectStorage identificar objetos de forma única.
        $this->listaDispositivos = new ListaDispositivos();
        $this->commandLista = new commandLista();
        $this->commandLista->addCommand(new CommandRegistrar());
    }

    // Se ejecuta el metod cuando recive una conexión
    public function onOpen(ConnectionInterface $conesion) {
      // Almacene la nueva conexión para enviar mensajes a más tarde
      $this->clients->attach($conesion); // attach -> Agrega un objeto a la lista

      echo "Nueva conexión! ({$conesion->resourceId})\n";
      // Preguntar la mac del dispositivo
      // Crear el objeto
      // $client->send("getTemperatura");

      $numRecv = count($this->clients);
      $mensaje = "connected:".$numRecv;
      //$this->commandLista->getCommand("registrar")->ejecutar();

    }

    // Mensaje recivido
    public function onMessage(ConnectionInterface $from, $msg) {
      echo sprintf('Conexion %d mensaje "%s ' . "\n \n"
               , $from->resourceId, $msg);

      $parametros = json_decode($msg, true);
      //var_dump($parametros) + "  -  ";

      $this->commandLista->getCommand($parametros["command"])->ejecutar($parametros);
    }

    public function onClose(ConnectionInterface $conn) {
        // La conexión está cerrada, eliminarla, ya que ya no podemos enviarle mensajes
        $this->clients->detach($conn);

        echo "La conexion {$conn->resourceId} se ha desconectado\n";
    }

    // Hay algun error en la concxión
    public function onError(ConnectionInterface $conn, \Exception $e) {
        echo "Se ha producido un error: {$e->getMessage()}\n";

        $conn->close();
    }


}
