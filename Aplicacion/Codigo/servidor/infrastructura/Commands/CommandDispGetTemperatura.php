<?php

namespace infrastructura\Commands;

class CommandDispGetTemperatura{
  private $nombre;
  private $listaDispositivos;

  public function __construct($listaDispositivos){
    $this->nombre = "getTemperatura";
    $this->listaDispositivos = $listaDispositivos;
  }

  public function getNombre(){
    return $this->nombre;
  }

  public function ejecutar($conec, $parametros){
    $dispositivo = $this->listaDispositivos->getDispositivo($parametros["mac"]);

    if($dispositivo->isConexion()){
      $dispositivo->enviarMensajeDispositivo($parametros);
    } else {
      echo "EL dispositivo no esta conectado\n";
    }
  }
}
