<?php

namespace infrastructura\Commands;

class CommandRegistrar
{
  private $conexion;
  function __construct($conexion)
  {
    $this->conexion = $conexion;
  }

  public function ejecutar()
  {
    // Ir preguntando a la conexion lo necesario para registrar
    // necesitari eun abstrac factori par instanciar los objetos de la aplicacion
  }
}





 ?>
