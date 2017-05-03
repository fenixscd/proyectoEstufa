<?php

namespace infrastructura\Commands;

class CommandClientSetTemperatura{
  private $nombre;
  private $listaDispositivos;

  public function __construct($listaDispositivos){
    $this->nombre = "setTemperatura";
    $this->listaDispositivos = $listaDispositivos;
  }

  public function getNombre(){
    return $this->nombre;
  }

  public function ejecutar($conec, $parametros){
    echo "Commando setTemperatura\n";
    $dispositivo = $this->listaDispositivos->getDispositivo($parametros["mac"]);
    $dispositivo->enviarMensajeDispositivoCliente($parametros);
  }
}
