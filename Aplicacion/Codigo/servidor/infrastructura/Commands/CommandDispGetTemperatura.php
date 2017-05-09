<?php

namespace infrastructura\Commands;

use infrastructura\ListaDispositivos;


class CommandDispGetTemperatura {
  private $nombre;
  private $listaDispositivos;

  public function __construct($listaDispositivos){
    $this->listaDispositivos = $listaDispositivos;
  }

  public function getNombre(){
    return $this->nombre;
  }

  public function ejecutar($conec, $parametros){
  $dispositivo = $this->listaDispositivos->getDispositivo($parametros["mac"]);

    if($dispositivo->isConexion()){
      $dispositivo->enviarMensaje($parametros);
      $dispositivo->enviarMensajeDispositivo($parametros);
    } else {
      echo "EL dispositivo no esta conectado\n";
    }

  }
}
