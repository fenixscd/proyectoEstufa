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

        $numRecv = count($this->clients) - 1;
        $mensaje = "log:".$numRecv;
        foreach ($this->clients as $client) {
            $client->send($mensaje);
          }
        }





    // Recivimos un mensaje
    // public function onMessage(ConnectionInterface $from, $msg) {
    //     $numRecv = count($this->clients) - 1;
    //     echo sprintf('Connection %d sending message "%s" to %d other connection%s' . "\n"
    //         , $from->resourceId, $msg, $numRecv, $numRecv == 1 ? '' : 's');
    //
    //     // Enviamos el mensaje a todos los usuarios
    //     foreach ($this->clients as $client) {
    //         if ($from !== $client) { // Si es el mismo cliente no le envia.
    //             // En via a todos los clentes conectado menos al que ha enviado el mensaje
    //             $client->send($msg);
    //         }
    //     }
    // }

    public function onMessage(ConnectionInterface $from, $msg) {
      $numRecv = count($this->clients) - 1;
      $mensaje = "log:".$msg;

      echo sprintf('Connection %d sending message "%s" to %d other connection%s' . "\n"
               , $from->resourceId, $msg, $numRecv, $numRecv == 1 ? '' : 's');

      foreach ($this->clients as $client) {
        if ($from !== $client) { // Si es el mismo cliente no le envia.
          // En via a todos los clentes conectado menos al que ha enviado el mensaje
          $client->send($mensaje);
        }
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
