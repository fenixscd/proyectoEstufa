<?php

namespace EjemploChat;
 // Arrancar en la consola php bin/WebSocket.php
use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use EjemploChat\Conexion;

require dirname(__DIR__) . '/vendor/autoload.php';

$server = IoServer::factory(
    new HttpServer(
        new WsServer(
            new Conexion()
        )
    ),
    8080
);
    echo "Sevidor en marcha IP 192.168.5.20 8080\n";
    $server->run();
?>