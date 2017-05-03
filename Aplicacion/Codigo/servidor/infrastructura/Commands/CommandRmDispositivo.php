<?php

namespace infrastructura\Commands;

class CommandRmDispositivo{
  private $nombre;
  private $listaDispositivos;

  public function __construct($listaDispositivos){
    $this->nombre = "rmDispositivo";
    $this->listaDispositivos = $listaDispositivos;
  }

  public function getNombre(){
    return $this->nombre;
  }

  public function ejecutar($conec, $parametros){
    // Mando la accion a las dos listas
    $dispositivo = $this->listaDispositivos->getDispositivo($parametros["mac"]);

    if($dispositivo->isConexion()){
      $dispositivo->enviarMensajeDispositivo($parametros);
    } else {
      echo "EL dispositivo no esta conectado\n";
    }
  }
}
