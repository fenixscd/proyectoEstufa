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
      return $this;
    }

    public function addDispositivoCliente($conexionDispositivoCliente){
      $this->listaConexionesCliente->addConexion($conexionDispositivoCliente);
    }

    public function rmDispositivoCliente($conexionDispositivoCliente){
      $this->listaConexionesCliente->detach($conexionDispositivoCliente);
    }

    public function getDispositivosCliente(){
      return $this->listaConexionesCliente;
    }

    public function isEqualsMac($mac){
      return $this->getMac() == $mac;
    }

    public function enviarMensajeDispositivo($parametros){
      echo "Funcion enviar mensaje DISPOSITIVO Parametros\n";
      $mensaje = json_encode($parametros);
      echo "Mensaje en string: ". $mensaje;
      if ($this->isConexionDispositivo()){
        $this->conexionDispositivo->send($mensaje);
        echo "Mensaje enviado a DISPOSITIVO ->\n\n\n";
      }else {
        echo "No hay Dispositivo\n";
      }
    }

    public function enviarMensajeDispositivoCliente($parametros){
      echo "El si que hay dispositivos numero de dispositivos :" . $this->listaConexionesCliente->getNConexiones() . " \n";
      echo "Enviar mensaje para los DISPOSITIVO: " . $this->listaConexionesCliente->getNConexiones() . " \n\n";
      $mensaje = json_encode($parametros);

      if ($this->listaConexionesCliente->isExistConexiones()){

        $this->listaConexionesCliente->enviarMensajeDispositivos($mensaje);
        echo "Envia a dispositivos cliente\n";
      }else {
        echo "No hay dispositivos cliente\n";
      }
    }

    public function eventoCambioEstadoDispositivo(){
      $this->enviarClienteEstadoConeDisp();
      // $this->enviarPersEstadoConeDisp();

    }

    public function enviarClienteEstadoConeDisp(){
      $parametros = array('mac'    => $this->mac,
                          'command'=>'clientSetEstadoDispConec',
                          'valor'  =>$this->isConexionDispositivo());

      $this->enviarMensajeDispositivoCliente($parametros);
    }



    public function eventoClienteConectado(){

    }

    public function eventoClienteDesconectado(){

    }

}
