<?php
namespace infrastructura;

use infrastructura\ListaConexionesCliente;

class Dispositivo {
    private $mac;
    private $idConexion;
    private $conexionDispositivo;
    private $listaConexionesCliente;
    private $persistencia;

    public function __construct() {
      $this->listaDispositivoCliente = new ListaConexionesCliente();
    }

    public function getMac(){
      return $this->mac;
    }

    public function setMac($mac){
      $this->mac = $mac;
      return $this;
    }

    public function getIdConexion(){
      if ($this->conexionDispositivo == null){
        return false;
      }
        return $this->conexionDispositivo->resourceId;
    }

    public function  getConexionDispositivo(){
      return $this->conexionDispositivo;
    }

    public function setConexionDispositivo($conexionDispositivo){
      $this->conexionDispositivo = $conexionDispositivo;
      return $this;
    }

    public function addDispositivoCliente($conexionDispositivoCliente){
      $this->listaDispositivoCliente->addConexion($conexionDispositivoCliente);
    }

    public function isEqualsMac($mac){
      return $this.mac == $mac;
    }

}
