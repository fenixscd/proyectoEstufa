<?php
namespace core;


class Estufa{
  private $conexion;

  public function __construct($conexion) {
      $this->conexion = $conexion;
  }

  // Envia el mensaje al dispositivo que representa
  public function enviarMensaje($msg){
    // $this->conexion->send($msg);
    echo $msg;
  }


}
