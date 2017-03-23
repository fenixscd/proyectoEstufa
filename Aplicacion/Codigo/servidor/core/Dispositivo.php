<?php
namespace core;

class Dispositivo {
  protected $mac;

  public function __construct($mac){
    $this->mac = $mac;
  }

  public function getMac(){
    return $this->mac;
  }

  public function isEcualMac(string $mac){
    return $this->mac == $mac;
  }
}
