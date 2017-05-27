<?php

namespace infrastructura\Commands;

class CommandClientGetEstadoDispConec{
  private $nombre;
  private $listaDispositivos;

  public function __construct($listaDispositivos){
    $this->nombre            = "clientGetEstadoDispConec";
    $this->listaDispositivos = $listaDispositivos;
  }

  public function getNombre(){
    return $this->nombre;
  }

  public function ejecutar($conec, $parametros){
    echo "Commando clientGetEstadoDispConec\n";
    $dispositivo = $this->listaDispositivos->getDispositivo($parametros["mac"]);

    $parametros["command"] = "clientSetEstadoDispConec";
    $parametros["valor"] = $dispositivo->isConexionDispositivo();

    $dispositivo->enviarMensajeDispositivoCliente($parametros);
  }
}
