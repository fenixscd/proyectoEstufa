<?php
use Ratchet\Server\IoServer;
use infrastructura\Chat;

require dirname(__DIR__) . '/vendor/autoload.php';

$server = IoServer::factory(
  new Chat(),
  8079
);

$server->run();
