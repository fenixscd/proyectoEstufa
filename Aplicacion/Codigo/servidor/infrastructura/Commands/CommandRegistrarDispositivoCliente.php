<?php

namespace infrastructura\Commands;

use infrastructura\Dispositivo;
use infrastructura\ListaDispositivos;

class CommandRegistrarDispositivoCliente{
  private $nombre;
  private $listaDispositivos;

  public function __construct($listaDispositivos){
    $this->nombre            = "registrarDispositivoCliente";
    $this->listaDispositivos = $listaDispositivos;
  }

  public function getNombre(){
    return $this->nombre;
  }

  public function ejecutar($conec, $parametros){
    echo "-Commando registrarDispositivoCliente \n";
    $dispositivo = $this->listaDispositivos->getDispositivo($parametros["mac"]);
    if(!$dispositivo){
      $dispositivo = new Dispositivo();
      $dispositivo->setMac($parametros["mac"])
                  ->addDispositivoCliente($conec);
      $this->listaDispositivos->addDispositivo($dispositivo);
    }else {
      $dispositivo->addDispositivoCliente($conec);
    }
  }
}
