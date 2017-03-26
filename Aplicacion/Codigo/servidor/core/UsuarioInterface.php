<?php

namespace core;

interface UsuarioInterface {
  public function getId();
  public function getListaDispositivos();
  public function enviarADispositivos();
}
