<?php

require_once('conexion.php');
/**
 *
 */
class ConexionesLista extends AnotherClass
{
  private conexiones=[];
  private count = 0;

  public addConexion (conexion $conexion)
  {
    $this->conexiones[++$count] = $conexion;

    echo "Se acaba de conectar uno";
    echo "Total conexiones ". getCountConexiones();
  }

  public getCountConexiones()
  {
    return $this->count;
  }
