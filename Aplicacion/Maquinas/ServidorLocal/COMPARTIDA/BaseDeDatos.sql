-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema ServidorEstufa
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `ServidorEstufa` ;

-- -----------------------------------------------------
-- Schema ServidorEstufa
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ServidorEstufa` DEFAULT CHARACTER SET utf8 ;
USE `ServidorEstufa` ;

-- -----------------------------------------------------
-- Table `ServidorEstufa`.`usuarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ServidorEstufa`.`usuarios` ;

CREATE TABLE IF NOT EXISTS `ServidorEstufa`.`usuarios` (
  `idUsuarios` INT NOT NULL AUTO_INCREMENT,
  `usuario` VARCHAR(45) NULL,
  `contrasena` VARCHAR(300) NULL,
  PRIMARY KEY (`idUsuarios`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ServidorEstufa`.`dispositivos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ServidorEstufa`.`dispositivos` ;

CREATE TABLE IF NOT EXISTS `ServidorEstufa`.`dispositivos` (
  `idDispositivos` INT NOT NULL AUTO_INCREMENT,
  `mac` VARCHAR(45) NULL,
  `FkUsuario` INT NULL,
  PRIMARY KEY (`idDispositivos`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

INSERT INTO `ServidorEstufa`.`usuarios` (`usuario`, `contrasena`) VALUES ('samuel', '12345');
INSERT INTO `ServidorEstufa`.`usuarios` (`usuario`, `contrasena`) VALUES ('javi', '12345');
INSERT INTO `ServidorEstufa`.`usuarios` (`usuario`, `contrasena`) VALUES ('blanca', '12345');
INSERT INTO `ServidorEstufa`.`usuarios` (`usuario`, `contrasena`) VALUES ('pedro', '12345');
INSERT INTO `ServidorEstufa`.`usuarios` (`usuario`, `contrasena`) VALUES ('abilea', '12345');
INSERT INTO `ServidorEstufa`.`usuarios` (`usuario`, `contrasena`) VALUES ('deby', '12345');

INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-01', '1');
INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-02', '1');
INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-03', '1');
INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-04', '1');
INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-05', '1');
INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-06', '2');
INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-07', '2');
INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-08', '2');
INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-09', '2');
INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-10', '2');
INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-11', '3');
INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-12', '3');
INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-13', '3');
INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-14', '3');
INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-15', '4');
INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-16', '4');
INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-17', '4');
INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-18', '4');
INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-19', '4');
INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-20', '5');
INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-21', '5');
INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-22', '5');
INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-23', '5');
INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-24', '6');
INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-25', '6');
INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-26', '6');
INSERT INTO `ServidorEstufa`.`dispositivos` (`mac`, `FkUsuario`) VALUES ('A6-B5-C4-D3-00-27', '6');
