<?php

namespace infrastructura\Commands;

use infrastructura\Dispositivo;
use infrastructura\ListaDispositivos;

class CommandRegistrarDispositivo{
  private $nombre;
  private $listaDispositivos;

  public function __construct($listaDispositivos){
    $this->nombre            = "registrarDispositivo";
    $this->listaDispositivos = $listaDispositivos;
  }

  public function getNombre(){
    return $this->nombre;
  }

  public function ejecutar($conec, $parametros){

    if(!$this->listaDispositivos->isExistsMac($parametros["mac"])){
      $dispositivo = new Dispositivo();
      $dispositivo->setMac($parametros["mac"])
                  ->setConexionDispositivo($conec);
      $this->listaDispositivos->addDispositivo($dispositivo);
    }else {
      //$this->listaDispositivos->
    }

    echo "-Commando registrarDispositivo";
  }

}
