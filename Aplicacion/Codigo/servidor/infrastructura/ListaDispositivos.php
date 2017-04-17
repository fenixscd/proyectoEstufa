<?php
namespace infrastructura;

use SplObjectStorage;

class ListaDispositivos {
    private $listaDispositivos;

    public function __construct() {
      $this->listaDispositivos = new SplObjectStorage;
    }

    public function addConexion($dispositivo){
      $this->listaDispositivos->attach($dispositivo);
    }

    public function rmConexion ($dispositivo){
      $this->listaDispositivos->detach($dispositivo);
    }

    public function getNConexiones(){
      return $this->listaDispositivos->count();
    }

}
