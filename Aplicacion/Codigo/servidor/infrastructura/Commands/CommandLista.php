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
    foreach ($this->commands as $command) {
      echo "Opcion: " . $command->getNombre();
      if ($command->getNombre() == $comando){
        echo "Retorna: " . $command->getNombre();
        return $command;
      }
    }
  }
}
