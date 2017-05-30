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
      $this->listaConexionesCliente = new ListaConexionesCliente();
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

    public function isConexionDispositivo(){
      if ($this->conexionDispositivo == null || $this->conexionDispositivo == false){
        return false;
      }
      return true;
    }

    public function  getConexionDispositivo(){
      return $this->conexionDispositivo;
    }

    public function setConexionDispositivo($conexionDispositivo){
      $this->conexionDispositivo = $conexionDispositivo;
      $this->eventoCambioEstadoDispositivo();
    }

    public function addDispositivoCliente($conexionDispositivoCliente){
      $this->listaConexionesCliente->addConexion($conexionDispositivoCliente);
      $this->enviarNumClientes();
    }

    public function rmConexionCliente($conexion){
      if ($this->listaConexionesCliente->isExistConexion($conexion)){
        $this->listaConexionesCliente->detach($conexion);
        $this->enviarNumClientes();
      }
    }

    public function getDispositivosCliente(){
      return $this->listaConexionesCliente;
    }

    public function isEqualsMac($mac){
      return $this->getMac() == $mac;
    }

    public function getNConexionesCliente(){
      return $this->listaConexionesCliente->getNConexiones();
    }

    public function enviarMensajeDispositivo($parametros){
      // echo "Funcion enviar mensaje DISPOSITIVO Parametros\n";
      $mensaje = json_encode($parametros);
      // echo "Mensaje en string: ". $mensaje;
      if ($this->isConexionDispositivo()){
        $this->conexionDispositivo->send($mensaje);
        // echo "Mensaje enviado a DISPOSITIVO ->\n\n\n";
      }else {
        echo "No hay Dispositivo CONECTADO \n";
      }
    }

    public function enviarMensajeDispositivoCliente($parametros){
      // echo "El si que hay dispositivos numero de dispositivos :" . $this->listaConexionesCliente->getNConexiones() . " \n";
      // echo "Enviar mensaje para los DISPOSITIVO: " . $this->listaConexionesCliente->getNConexiones() . " \n\n";
      $mensaje = json_encode($parametros);

      if ($this->listaConexionesCliente->isExistConexiones()){

        $this->listaConexionesCliente->enviarMensajeDispositivos($mensaje);
        // echo "Envia a dispositivos cliente\n";
      }else {
        echo "El dispositivo ".  $parametros["mac"] . "no esta conectado -> comando".  $parametros["command"] . "\n";
      }
    }


    public function isEqualConexionDispositivo($conexion){
      if ($this->conexionDispositivo == $conexion) return true;
      return false;
    }

    public function eventoCambioEstadoDispositivo(){
      $this->enviarClienteEstadoConeDisp();
      $this->enviarNumClientes();
    }

    public function enviarClienteEstadoConeDisp(){
      $parametros = array('mac'    => $this->mac,
                          'command'=>'clientSetEstadoDispConec',
                          'valor'  =>$this->isConexionDispositivo());

      $this->enviarMensajeDispositivoCliente($parametros);
    }

    public function enviarNumClientes(){
      $parametros = array('mac'    => $this->mac,
                          'command'=>'cambiarNumClientes',
                          'valor'  =>$this->getNConexionesCliente());

      $this->enviarMensajeDispositivo($parametros);
    }

}
