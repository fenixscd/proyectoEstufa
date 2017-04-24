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
    echo "Estoy en registrar disposivo";
    var_dump($parametros);
    $dispositivo = $this->listaDispositivos->getDispositivo($parametros["mac"]);
    echo "Paso de la parte de cargar dispositivo \n";
    if(!$dispositivo){
      $dispositivo = new Dispositivo();
      $dispositivo->setMac($parametros["mac"])
                  ->setConexionDispositivo($conec);
      $this->listaDispositivos->addDispositivo($dispositivo);
    }else {
      $dispositivo->setConexionDispositivo($conec);
    }

    echo "-Commando registrarDispositivo \n";
  }

}
