<?php

namespace tests\Core;


use core\Dispositivo;

class DispositivoTest extends \PHPUnit_Framework_TestCase
{
  public function test_isEcualMacEsTrue(){
        $dispositivo = new Dispositivo("123456");
        $this->assertTrue($dispositivo->isEcualMac("123456"));
  }

  public function test_isEcualMacFalse(){
        $dispositivo = new Dispositivo("123456");
        $this->assertFalse($dispositivo->isEcualMac("12345"));
  }

}
