<?php
namespace infrastructura;

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

use SplObjectStorage;
use infrastructura\Commands\CommandLista;
use infrastructura\Commands\CommandRegistrarDispositivo;
use infrastructura\Commands\CommandRegistrarDispositivoCliente;
use infrastructura\Commands\CommandClientSetTemperatura;
use infrastructura\Commands\CommandClientRepetir;
use infrastructura\Commands\CommandDispRepetir;
use infrastructura\Commands\CommandClientSetTermostatoTemp;
use infrastructura\Commands\CommandClientSetTermostatoEstado;
use infrastructura\Commands\CommandClientSetResistenciaEstado;
use infrastructura\Commands\CommandClientSetHumedad;
use infrastructura\Commands\CommandClientGetEstadoDispConec;



class Conexion implements MessageComponentInterface {
    private $clients;
    private $listaDispositivos;
    private $commandLista;


    public function __construct() {
        $this->clients = new SplObjectStorage; // SplObjectStorage identificar objetos de forma única.
        $this->listaDispositivos = new ListaDispositivos();
        $this->commandLista = new commandLista();
        $this->commandLista->addCommand(new CommandClientSetTemperatura($this->listaDispositivos));
        $this->commandLista->addCommand(new CommandRegistrarDispositivo($this->listaDispositivos));
        $this->commandLista->addCommand(new CommandRegistrarDispositivoCliente($this->listaDispositivos));
        $this->commandLista->addCommand(new CommandClientRepetir($this->listaDispositivos));
        $this->commandLista->addCommand(new CommandDispRepetir($this->listaDispositivos));
        $this->commandLista->addCommand(new CommandClientSetTermostatoTemp($this->listaDispositivos));
        $this->commandLista->addCommand(new CommandClientSetTermostatoEstado($this->listaDispositivos));
        $this->commandLista->addCommand(new CommandClientSetResistenciaEstado($this->listaDispositivos));
        $this->commandLista->addCommand(new CommandClientSetHumedad($this->listaDispositivos));
        $this->commandLista->addCommand(new CommandClientGetEstadoDispConec($this->listaDispositivos));



    }

    // Se ejecuta el metod cuando recive una conexión
    public function onOpen(ConnectionInterface $conesion) {
      // Almacene la nueva conexión para enviar mensajes a más tarde
      $this->clients->attach($conesion); // attach -> Agrega un objeto a la lista
      echo "Nueva conexión! ({$conesion->resourceId})\n";
    }

    // Mensaje recivido
    public function onMessage(ConnectionInterface $conec, $msg) {
      //echo sprintf('Mensaje entrante %d mensaje "%s ' . "\n", $conec->resourceId, $msg);

      $parametros = json_decode($msg, true);
      //var_dump($parametros) + "  -  ";
      $comando = $this->commandLista->getCommand($parametros["command"]);

      if ($comando){
        $comando->ejecutar($conec, $parametros);
      }
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
