<?php

namespace core;

interface DispositivoInterface {
  public function getMac();
  public function getListaUsuarios();
  public function enviarAUsuarios();
}