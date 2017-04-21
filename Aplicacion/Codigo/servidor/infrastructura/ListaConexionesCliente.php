<?php
namespace infrastructura;

use SplObjectStorage;

class ListaConexionesCliente {
    private $listaConexionesCliente;

    public function __construct() {
      $this->listaConexionesCliente = new SplObjectStorage;
    }

    public function addConexion($conexion){
      $this->listaConexionesCliente->attach($conexion);
    }

    public function rmConexion ($conexion){
      $this->listaConexionesCliente->detach($conexion);
    }

    public function getNConexiones(){
      return $this->listaConexionesCliente->count();
    }

}
