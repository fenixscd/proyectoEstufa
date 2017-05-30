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
    echo "Commando dispGetNumClientes\n";
    $dispositivo = $this->listaDispositivos->getDispositivo($parametros["mac"]);

    $parametros["command"] = "cambiarNumClientes";
    $parametros["valor"]   = $dispositivo->getNConexionesCliente();

    $dispositivo->enviarMensajeDispositivo($parametros);
  }
}
