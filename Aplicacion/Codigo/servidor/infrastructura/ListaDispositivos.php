<?php
namespace infrastructura;

use SplObjectStorage;

class ListaDispositivos {
    private $listaDispositivos;

    public function __construct() {
      $this->listaDispositivos = new SplObjectStorage;
    }

    public function addDispositivo($dispositivo){
      $this->listaDispositivos->attach($dispositivo);
    }

    public function rmDispositivo ($dispositivo){
      $this->listaDispositivos->detach($dispositivo);
    }

    public function getNDispositivos(){
      return $this->listaDispositivos->count();
    }

}
