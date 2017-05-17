<?php

namespace infrastructura\Commands;
use SplObjectStorage;

class CommandLista{
  protected $commands;

  public function __construct() {
      $this->commands = new SplObjectStorage; // SplObjectStorage identificar objetos de forma única.
  }

  public function addCommand($Command){
    $this->commands->attach($Command);
  }

  public function getCommand($comando){
    foreach ($this->commands as $command){
      if ($command->getNombre() == $comando){
        return $command;
      }
    }
    // Repetir comando
    echo "El comando - " . $comando . " - NO EXISTE\n";
  }
}
