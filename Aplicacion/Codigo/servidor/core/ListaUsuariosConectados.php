<?php

namespace core;

use core\UsuarioInterface;

class ListaUsuariosConectados {
  protected $listaUsuarios;

  public function __construct() {
      $this->$listaUsuarios = new \SplObjectStorage; // SplObjectStorage identificar objetos de forma única.
  }

  public function addUsuario (UsuarioInterface $usuario){
    $this->$listaUsuarios->attach($usuario); // attach -> Agrega un objeto a la lista
  }
}
