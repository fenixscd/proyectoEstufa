<?php
namespace infrastructura;

use mysqli;


class Persistencia {

    private $usuario;
    private $contrasena;
    private $servidor;
    private $dataBase;
    private $conexion;


    public function __construct(){
      $this->usuario    = "root";
      $this->contrasena = "ServidorEstufa";
      $this->servidor   = "localhost";
      $this->dataBase   = "ServidorEstufa";

      $this->conectar();
    }

    private function conectar(){
      $this->conexion = new mysqli($this->servidor,
                                   $this->usuario,
                                   $this->contrasena,
                                   $this->dataBase);

      // echo "Conectado a la base de datos";
      if ($this->conexion->connect_errno){
        echo "\nNo Conectado" .  $this->conexion->connect_error . "\n";

      }else {
        echo "\nConecatodo \n";
      }


    }

    public function listadoDeMacs ($usuarios, $contrasena){

    }
  }
