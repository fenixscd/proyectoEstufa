<?php

use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use infrastructura\Conexion;

require dirname(__DIR__) . '/vendor/autoload.php';

$server = IoServer::factory(
    new HttpServer(
        new WsServer(
            new Conexion()
        )
    ),
    8080
);
    echo "Sevidor en marcha IP 192.168.5.10 8080\n";
    $server->run();



?>
