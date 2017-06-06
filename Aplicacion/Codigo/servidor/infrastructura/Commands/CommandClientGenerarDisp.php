<?php

namespace infrastructura\Commands;

use infrastructura\Dispositivo;
use infrastructura\ListaDispositivos;
use infrastructura\Persistencia;

class CommandClientGenerarDisp{
  private $nombre;
  private $listaDispositivos;
  private $conexion;

  public function __construct($listaDispositivos){
    $this->nombre            = "clientGenerarDisp";
    $this->listaDispositivos = $listaDispositivos;
  }

  public function getNombre(){
    return $this->nombre;
  }

  public function ejecutar($conec, $parametros){
    echo "Commando clientGenerarDisp ". $parametros["usuario"] ."\n";

    $this->conexion = $conec;
    $usuario = $parametros["usuario"];
    $persistencia = Persistencia::getInstance();

    $listadoMacs = $persistencia->listadoDeMacs($usuario);

    foreach ($listadoMacs as $mac) {
      $this->enviarMensaje($mac);
    }
  }


  private function enviarMensaje($mac){
    $parametros = array('mac'=> $mac,'command'=>'crearDispositivo');
    $mensaje = json_encode($parametros);
    $this->conexion->send($mensaje);
  }
}
