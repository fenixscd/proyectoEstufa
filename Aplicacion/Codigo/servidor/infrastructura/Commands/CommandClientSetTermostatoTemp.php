<?php

namespace infrastructura\Commands;

class CommandClientSetTermostatoTemp{
  private $nombre;
  private $listaDispositivos;

  public function __construct($listaDispositivos){
    $this->nombre            = "clientSetTermostatoTemp";
    $this->listaDispositivos = $listaDispositivos;
  }

  public function getNombre(){
    return $this->nombre;
  }

  public function ejecutar($conec, $parametros){
    // echo "Commando clientSetTermostatoTemp\n";
    //
    // Falta guardar en la base de datos
    //
    $dispositivo = $this->listaDispositivos->getDispositivo($parametros["mac"]);
    $dispositivo->enviarMensajeDispositivoCliente($parametros);
  }
}
