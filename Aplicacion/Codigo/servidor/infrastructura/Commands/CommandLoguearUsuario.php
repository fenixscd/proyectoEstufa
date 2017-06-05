<?php

namespace infrastructura\Commands;

use infrastructura\Dispositivo;
use infrastructura\ListaDispositivos;
use infrastructura\Persistencia;

class CommandLoguearUsuario{
  private $nombre;
  private $listaDispositivos;

  public function __construct($listaDispositivos){
    $this->nombre            = "loguearUsuario";
    $this->listaDispositivos = $listaDispositivos;
    $persistencia = new Persistencia();
  }

  public function getNombre(){
    return $this->nombre;
  }

  public function ejecutar($conec, $parametros){

    // Conecto con la base de datos me logueo y pido los usuarios para ese dispositivo
    $usuario    = $parametros["usuario"];
    $contrasena = $parametros["contrasena"];



    $persistencia = new Persistencia();

    $listadoMacs = $persistencia.listadoDeMacs($usuario, $contrasena);



    // echo "Commando registrarDispositivo ".$parametros["mac"]." \n";
    // var_dump($parametros);
    // $dispositivo = $this->listaDispositivos->getDispositivo($parametros["mac"]);
    // if(!$dispositivo){
    //   $dispositivo = new Dispositivo();
    //   $dispositivo->setMac($parametros["mac"])
    //               ->setConexionDispositivo($conec);
    //   $this->listaDispositivos->addDispositivo($dispositivo);
    // }else {
    //   $dispositivo->setConexionDispositivo($conec);
    // }
  }
}
