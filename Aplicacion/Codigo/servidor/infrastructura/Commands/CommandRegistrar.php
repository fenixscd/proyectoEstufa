<?php

namespace infrastructura\Commands;

use infrastructura\Dispositivo;
use infrastructura\ListaDispositivos;

class CommandRegistrar{
  private $nombre;

  public function __construct(){
    $this->nombre = "registrar";
  }

  public function ejecutar($parametros){

    echo "Commando Registrar";
  }

  public function getNombre(){
    return $this->nombre;
  }

}
