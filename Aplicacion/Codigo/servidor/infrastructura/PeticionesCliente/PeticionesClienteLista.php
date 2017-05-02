<?php

namespace infrastructura\PeticionesCliente;
use SplObjectStorage;

class PeticionesClienteLista{
  protected $peticiones;

  public function __construct() {
      $this->$peticiones = new SplObjectStorage; // SplObjectStorage identificar objetos de forma única.
  }

  public function addPeticion($peticion){
    $this->$peticiones->attach($peticion);
  }

  public function getPeticion($peticionNombre){
    foreach ($this->$peticiones as $peticion) {
      if ($peticion->getNombre() == $peticionNombre){
        return $peticion;
      }
    }
    echo "La peticione clente - " .$peticionNombre. " - NO EXISTE\n";
  }
}
