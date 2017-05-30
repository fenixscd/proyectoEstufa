<?php

namespace infrastructura\Commands;

class CommandClientSetNombreDisp{
  private $nombre;
  private $listaDispositivos;

  public function __construct($listaDispositivos){
    $this->nombre = "clientSetNombreDispositivo";
    $this->listaDispositivos = $listaDispositivos;
  }

  public function getNombre(){
    return $this->nombre;
  }

  public function ejecutar($conec, $parametros){
    // echo "Commando clientSetHumedad\n";
    $dispositivo = $this->listaDispositivos->getDispositivo($parametros["mac"]);
    $dispositivo->enviarMensajeDispositivoCliente($parametros);
  }
}
