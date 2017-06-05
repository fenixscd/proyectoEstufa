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
