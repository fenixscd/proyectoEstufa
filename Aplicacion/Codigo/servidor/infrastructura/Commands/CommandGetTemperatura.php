<?php

namespace infrastructura\Commands;

class CommandGetTemperatura{
  private $nombre;
  private $listaDispositivos;

  public function __construct(){
    $this->nombre = "getTemperatura";
    $this->listaDispositivos = $listaDispositivos;
  }

  public function getNombre(){
    return $this->nombre;
  }

  public function ejecutar($conec, $parametros){
    // Es a quien tendria que contestar

    

    echo "Commando getTemperatura";
  }
}
