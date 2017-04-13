<?php

namespace infrastructura\Commands;

class CommandRegistrar{
  private $nombre;

  public function __construct(){
    $this->nombre = "registrar";
  }

  public function ejecutar(){
    echo "Commando Registrar";
  }

  public function getNombre(){
    return $this->nombre;
  }

}
