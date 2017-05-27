<?php

namespace infrastructura\Commands;

class CommandDispGetNumClientes{
  private $nombre;
  private $listaDispositivos;

  public function __construct($listaDispositivos){
    $this->nombre            = "dispGetNumClientes";
    $this->listaDispositivos = $listaDispositivos;
  }

  public function getNombre(){
    return $this->nombre;
  }

  public function ejecutar($conec, $parametros){
    echo "Commando clientGetEstadoDispConec\n";
    $dispositivo = $this->listaDispositivos->getDispositivo($parametros["mac"]);

    $parametros["command"] = "setNumClientes";
    $parametros["valor"] = $dispositivo->getNConexionesCliente();

    $dispositivo->enviarMensajeDispositivo($parametros);
  }
}
