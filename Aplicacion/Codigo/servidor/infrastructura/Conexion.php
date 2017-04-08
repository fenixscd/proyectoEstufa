<?php
namespace infrastructura;

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

class Conexion implements MessageComponentInterface {
    protected $clients;

    public function __construct() {
        $this->clients = new \SplObjectStorage; // SplObjectStorage identificar objetos de forma única.
    }

    // Se ejecuta el metod cuando recive una conexión
    public function onOpen(ConnectionInterface $conn) {
      // Almacene la nueva conexión para enviar mensajes a más tarde
      $this->clients->attach($conn); // attach -> Agrega un objeto a la lista

      echo "Nueva conexión! ({$conn->resourceId})\n";
      // Preguntar la mac del dispositivo
      // Crear el objeto
      
      $numRecv = count($this->clients);
      $mensaje = "connected:".$numRecv;
    }

    // Mensaje recivido
    public function onMessage(ConnectionInterface $from, $msg) {
      echo sprintf('Conexion %d mensaje "%s ' . "\n"
               , $from->resourceId, $msg);
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
