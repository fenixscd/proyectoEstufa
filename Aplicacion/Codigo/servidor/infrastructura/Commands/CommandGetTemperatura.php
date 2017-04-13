<?php

namespace infrastructura\Commands;

class CommandGetTemperatura{
  private $nombre;

  public function __construct(){
    $this->nombre = "getTemperatura";
  }

  public function ejecutar(){
    echo "Commando getTemperatura";
  }

  public function getNombre(){
    return $this->nombre;
  }

}
