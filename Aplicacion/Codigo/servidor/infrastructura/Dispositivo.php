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
        return $this->idConexion;
    }

    public function setIdConexion($idConexion){
        $this->idConexion = $idConexion;
        return $this;
    }

    public function  getConexionDispositivo(){
      return $this->conexionDispositivo;
    }

    public function setConexionDispositivo($conexionDispositivo){
      $this->conexionDispositivo = $conexionDispositivo;
      return $this;
    }




    public function isEqualsMac($mac){
      return $this.mac == $mac;
    }




}
