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

    public function isExistsMac($mac){
      foreach($this->listaDispositivos as $dis){
        if ($dis->isEqualsMac($mac)){
          return true;
        }
      }
      return false;
    }

    public function getDispositivo($mac){
      foreach($this->listaDispositivos as $dis){
        if ($dis->isEqualsMac($mac)){
          return $dis;
        }
      }
      return false;
    }

}
