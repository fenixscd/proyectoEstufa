<?php

namespace infrastructura\Commands;

use infrastructura\ListaDispositivos;


abstract class Command {
  private $nombre;
  private $listaDispositivos;

  public function __construct($listaDispositivos){
    $this->listaDispositivos = $listaDispositivos;
  }

  public function getNombre(){
    return $this->nombre;
  }

  public function ejecutar($conec, $parametros){}
}
