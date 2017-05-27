<?php
namespace infrastructura;

use SplObjectStorage;

class ListaDispositivos {
    private $listaDispositivos;

    public function __construct() {
      $this->listaDispositivos = new SplObjectStorage;
    }

    public function addDispositivo($dispositivo){
      $this->listaDispositivos->attach($dispositivo);
    }

    public function rmDispositivo ($dispositivo){
      $this->listaDispositivos->detach($dispositivo);
    }

    public function rmConexion ($conexion){
      // Primero si es del tipo dispositivo

       foreach($this->listaDispositivos as $dis){
         if ($dis->isEqualConexionDispositivo($conexion)){
           $dis->setConexionDispositivo(false);
           break;
         }
         $dis->rmConexionCliente($conexion);
       }

    }

    public function getNDispositivos(){
      return $this->listaDispositivos->count();
    }

    public function isExistsMac($mac){
      foreach($this->listaDispositivos as $dis){
        if ($dis->isEqualsMac($mac)){
          return true;
        }
      }
      return false;
    }

    public function getDispositivo($mac){
      foreach($this->listaDispositivos as $dis){
        if ($dis->isEqualsMac($mac)){
          return $dis;
        }
      }
      return false;
    }

    // public function rmConexion($conexion){
    //   foreach($this->listaDispositivos as $dis){
    //     $dis->rmDispositivoCliente($conexion);
    //     if ($dis->getConexionDispositivo() == $conexion){
    //       $dis->setConexionDispositivo(null);
    //     }
    //     if (!$this->isExistConexionesDispositivoOrClient()){
    //       $this->listaDispositivos->detach($dis);
    //     }
    //   }
    // }

    public function isExistConexionesDispositivoOrClient($dispositivo){
      if ($dispositivo->isConexion() || $dispositivo->getDispositivosCliente()->isExistConexiones()){
        return true;
      }
      return false;
    }
}
