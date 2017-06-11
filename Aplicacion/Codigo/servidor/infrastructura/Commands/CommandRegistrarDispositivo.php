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
    echo "Commando registrarDispositivo ".$parametros["mac"]." \n";
    $dispositivo = $this->listaDispositivos->getDispositivo($parametros["mac"]);
    if(!$dispositivo){
      $dispositivo = new Dispositivo();
      $dispositivo->setMac($parametros["mac"])
                  ->setConexionDispositivo($conec);
      $this->listaDispositivos->addDispositivo($dispositivo);
    }else {
      $dispositivo->setConexionDispositivo($conec);
    }
  }
}
