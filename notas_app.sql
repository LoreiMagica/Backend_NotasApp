-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         9.3.0 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.11.0.7065
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para notas_app
CREATE DATABASE IF NOT EXISTS `notas_app` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `notas_app`;

-- Volcando estructura para tabla notas_app.nota
CREATE TABLE IF NOT EXISTS `nota` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `usuarioId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_307b52377ea36917d8a8d78f5c9` (`usuarioId`),
  CONSTRAINT `FK_307b52377ea36917d8a8d78f5c9` FOREIGN KEY (`usuarioId`) REFERENCES `usuario` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla notas_app.nota: ~8 rows (aproximadamente)
DELETE FROM `nota`;
INSERT INTO `nota` (`id`, `titulo`, `descripcion`, `estado`, `usuarioId`) VALUES
	(6, 'Mi notita', 'Yo canto porque cantando se gana un ganso', 'pendiente', 3),
	(7, 'No sé que poner', 'Me gustan las patatas fritas', 'pendiente', 5),
	(8, 'Nombres de gato', 'Misifú, Tiramisú, Algodón', 'progreso', 5),
	(9, 'Compra', 'Boles, comida de gato, detergente', 'pendiente', 5),
	(10, 'Nombres de perro', 'Boby, patitas, Perrdro, Guaurdián', 'progreso', 3),
	(13, 'Madre mía cómo tiene Manolo su mesa', 'Debería decirle que la limpie un poco', 'completada', 5),
	(15, 'Limpiar la cocina ya de ya', 'El gato se ha liado a jugar con el papel de cocina y esto es un desastre ahora', 'progreso', 5),
	(16, 'Limpiar la mesa', 'Tengo la mesa llena de cosas, lo mejor es organizar esto un poco', 'completada', 3);

-- Volcando estructura para tabla notas_app.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,

  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla notas_app.usuario: ~2 rows (aproximadamente)
DELETE FROM `usuario`;
INSERT INTO `usuario` (`id`, `usuario`, `contrasena`) VALUES
	(3, , 'Manolo', '$2b$10$bvHTm5XA3zWJellZ6yOZtuy6WpUW2g3a1KNIW9MiFDMVVTviBHp3u'),
	(5, , 'Pepe', '$2b$10$iv7NC8wT2ZLk4IWA9gVJiug5PJ4AnpANGvodNMpVDQMfgwDMslpmW');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
