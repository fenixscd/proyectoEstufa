<?php
namespace infrastructura;

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

use SplObjectStorage;
use infrastructura\Commands\CommandLista;
use infrastructura\Commands\CommandRegistrar;
use infrastructura\Commands\CommandRegistrarDispositivo;

class Conexion implements MessageComponentInterface {
    private $clients;
    private $listaDispositivos;
    private $commandLista;


    public function __construct() {
        $this->clients = new SplObjectStorage; // SplObjectStorage identificar objetos de forma única.
        $this->listaDispositivos = new ListaDispositivos();
        $this->commandLista = new commandLista();
        $this->commandLista->addCommand(new CommandRegistrar($this->listaDispositivos));
        $this->commandLista->addCommand(new CommandRegistrarDispositivo($this->listaDispositivos));
    }

    // Se ejecuta el metod cuando recive una conexión
    public function onOpen(ConnectionInterface $conesion) {
      // Almacene la nueva conexión para enviar mensajes a más tarde
      $this->clients->attach($conesion); // attach -> Agrega un objeto a la lista

      echo "Nueva conexión! ({$conesion->resourceId})\n";
    }

    // Mensaje recivido
    public function onMessage(ConnectionInterface $conec, $msg) {
      echo sprintf('Conexion %d mensaje "%s ' . "\n \n"
               , $conec->resourceId, $msg);

      $parametros = json_decode($msg, true);
      //var_dump($parametros) + "  -  ";

      $this->commandLista->getCommand($parametros["command"])->ejecutar($conec, $parametros);
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
