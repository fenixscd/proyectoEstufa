<?php

namespace infrastructura\Commands;

class CommandClientSetHumedad{
  private $nombre;
  private $listaDispositivos;

  public function __construct($listaDispositivos){
    $this->nombre = "clientSetHumedad";
    $this->listaDispositivos = $listaDispositivos;
  }

  public function getNombre(){
    return $this->nombre;
  }

  public function ejecutar($conec, $parametros){
    // echo "Commando clientSetHumedad\n";
    $dispositivo = $this->listaDispositivos->getDispositivo($parametros["mac"]);
    $dispositivo->enviarMensajeDispositivoCliente($parametros);
  }
}
