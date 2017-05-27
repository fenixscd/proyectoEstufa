<?php
namespace infrastructura\Commands;

use infrastructura\ListaDispositivos;

class CommandDispRepetir {
  private $nombre;
  private $listaDispositivos;

  public function __construct($listaDispositivos){
    $this->nombre            = "dispRepetir";
    $this->listaDispositivos = $listaDispositivos;
  }

  public function getNombre(){
    return $this->nombre;
  }

  public function ejecutar($conec, $parametros){
    $dispositivo = $this->listaDispositivos->getDispositivo($parametros["mac"]);
    $parametros["command"] = $parametros["repetir"];
    echo "El comando a repetir ". $parametros["command"] . "\n";

    if($dispositivo->isConexionDispositivo()){
      $dispositivo->enviarMensajeDispositivo($parametros);
    } else {
      echo "EL dispositivo no esta conectado\n";
    }
  }
}
