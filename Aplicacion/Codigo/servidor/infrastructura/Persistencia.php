<?php
namespace infrastructura;

use mysqli;

class Persistencia {

    static private $instance = null;

    private $usuario;
    private $contrasena;
    private $servidor;
    private $dataBase;
    private $mysqli;

    public function __construct(){
      $this->usuario    = "root";
      $this->contrasena = "ServidorEstufa";
      $this->servidor   = "localhost";
      $this->dataBase   = "ServidorEstufa";
    }

    public static function getInstance() {
      if (self::$instance == null) {
        self::$instance = new Persistencia();
      }
        return self::$instance;
    }

    private function conectar(){
      $this->mysqli = new mysqli($this->servidor,
                                   $this->usuario,
                                   $this->contrasena,
                                   $this->dataBase);

      // echo "Conectado a la base de datos";
      if ($this->mysqli->connect_errno){
        echo "\nNo Conectado" .  $this->mysqli->connect_error . "\n";
      }else {
        echo "\nConecatodo \n";
        return true;
      }
    }

    public function listadoDeMacs($usuario){
      if (!$this->conectar()){
        exit;
      }

      $sql = "SELECT usuarios.usuario, dispositivos.mac FROM usuarios INNER JOIN dispositivos ON usuarios.IdUsuarios = dispositivos.FkUsuario WHERE usuarios.usuario='". $usuario."';";
      if (!$resultado = $this->mysqli->query($sql)) {
        echo "La consulta a fallado\n";
        echo "Error: La ejecución de la consulta falló debido a: \n";
        echo "Query: " . $sql . "\n";
        echo "Errno: " . $this->mysqli->errno . "\n";
        echo "Error: " . $this->mysqli->error . "\n";
        // exit;
      }

      $reusltaodMacs = array();
      if ($resultado->num_rows === 0) {
        echo "Lo sentimos. No se pudo encontrar dispositivos para el usuario $usuarios.";
        $reusltaodMacs = false;
        // exit;
      }

      while ($dispositivo = $resultado->fetch_assoc()) {
        echo "Usuario: " . $dispositivo['usuario'] . ' mac: ' . $dispositivo['mac']. "\n";
        $reusltaodMacs[] = $dispositivo['mac'];
      }

      return $reusltaodMacs;

      $resultado->free();
      $this->mysqli->close();
    }
}
