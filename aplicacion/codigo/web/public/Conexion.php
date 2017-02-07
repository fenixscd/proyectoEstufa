<?php
/**
 *
 */
class Conexion
{
  private $conexion;
  function __construct($conexion)
  {
    $this->conexion = $conexion;
  }

  public function getConexion()
  {
    return $conexion;
  }

}
