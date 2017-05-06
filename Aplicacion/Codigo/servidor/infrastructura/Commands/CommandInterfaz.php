<?php

namespace infrastructura\Commands;

interface CommandInterfaz {
  public function getNombre();
  public function ejecutar($conec, $parametros);
}
