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

    public function getConexiones (){
      return $this->listaConexionesCliente;
    }

    public function isExistConexiones(){
      if ($this->getNConexiones()== 0) return false;
      else return true;
    }

    public function enviarMensajeDispositivos ($parametros){
      echo "Lo que voy a enviar a cliente : ". $parametros ."\n";
      foreach($this->listaConexionesCliente as $dis){
         $dis->send($parametros);
      }
      return false;
    }

    public function isConexionId ($resourceId){
      foreach($this->listaConexionesCliente as $dis){
        if ($dis->resourceId == $resourceId){
          return true;
        }
      }
      return false;
    }

    public function isExistConexion($conexion){
      foreach($this->listaConexionesCliente as $con){
        if ($con == $conexion){
          return true;
        }
      }
      return false;
    }

    public function detach($conexion){
      $this->listaConexionesCliente->detach($conexion);
    }
}
