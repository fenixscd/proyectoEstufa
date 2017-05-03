<?php

namespace infrastructura\Commands;

use infrastructura\Dispositivo;
use infrastructura\ListaDispositivos;

class Command {
  private $nombre;
  private $listaDispositivos;

  public function __construct($listaDispositivos){
    $this->nombre            = "registrarDispositivoCliente";
    $this->listaDispositivos = $listaDispositivos;
  }

  public function setNombre($nombre){
    $this->nombre = $nombre ;
    return $this;
  }

  public function getNombre(){
    return $this->nombre;
  }

  public function ejecutar($conec, $parametros){}
}
