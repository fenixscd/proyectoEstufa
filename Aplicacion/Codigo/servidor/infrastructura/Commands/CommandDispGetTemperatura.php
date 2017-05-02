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

  public function ejecutar($conec, $param){
    echo "Commando getTemperatura\n";
    $parametros = array("mac"            => $param["mac"],
                        "command"        => "getTemperatura",
                        "codigoPeticion" => $param["mac"]);
    $dispositivo = $this->listaDispositivos->getDispositivo($parametros["mac"]);

    if($dispositivo->isConexion()){
      $dispositivo-> enviarMensaje($parametros);
    } else {
      echo "EL dispositivo no esta conectado\n";
    }
  }
}
