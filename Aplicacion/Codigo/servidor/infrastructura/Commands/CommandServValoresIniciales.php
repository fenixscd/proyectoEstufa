<?php
namespace infrastructura\Commands;

use infrastructura\ListaDispositivos;

class CommandServValoresIniciales {
  private $nombre;
  private $listaDispositivos;

  public function __construct($listaDispositivos){
    $this->nombre            = "serverValoresInciales";
    $this->listaDispositivos = $listaDispositivos;
  }

  public function getNombre(){
    return $this->nombre;
  }

  public function ejecutar($conec, $parametros){
    $dispositivo = $this->listaDispositivos->getDispositivo($parametros["mac"]);

    if($dispositivo->isConexionDispositivo()){
      $parametros["command"] = "crearDispositivo";
      $dispositivo->enviarMensajeDispositivo($parametros);
    } else {
      // Para los valores de temperatura y estado del termostato
      echo "Se pasa la consulta a la Base de Datos\n";
    }
  }
}
