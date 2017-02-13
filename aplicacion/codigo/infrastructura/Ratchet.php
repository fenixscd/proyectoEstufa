<?php
namespace infrastructura;

use Ratchet\Server\IoServer;
use Ratchet\WebSocket\WsServer;
use infrastructura\Chat;

    $server = IoServer::factory(
        new WsServer(new Chat()), 8000);

    $server->run();
?>
