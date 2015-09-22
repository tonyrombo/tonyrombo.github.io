-- phpMyAdmin SQL Dump
-- version 4.4.3
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 14, 2015 at 06:22 PM
-- Server version: 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `info_conciertos`
--

-- --------------------------------------------------------

--
-- Table structure for table `autor`
--

CREATE TABLE IF NOT EXISTS `autor` (
  `idAutor` int(10) NOT NULL,
  `nombreAutor` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `autor`
--

INSERT INTO `autor` (`idAutor`, `nombreAutor`) VALUES
(1, 'Jimmy Corella'),
(2, 'Antony Romero'),
(3, 'Landfor Gabriel'),
(4, 'Valeria Mendez'),
(5, 'Ricardo Perez');

-- --------------------------------------------------------

--
-- Table structure for table `concierto`
--

CREATE TABLE IF NOT EXISTS `concierto` (
  `idConcierto` varchar(255) NOT NULL,
  `fechaConcierto` date NOT NULL,
  `horaConcierto` varchar(255) NOT NULL,
  `tituloConcierto` varchar(255) NOT NULL,
  `duracionConcierto` varchar(255) NOT NULL,
  `precioConcierto` int(10) unsigned NOT NULL,
  `idPrograma` int(10) NOT NULL,
  `idTemporada` int(10) NOT NULL,
  `idGrupo` int(10) unsigned DEFAULT NULL,
  `idOrquesta` int(10) DEFAULT NULL,
  `cedulaMusico` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `concierto`
--

INSERT INTO `concierto` (`idConcierto`, `fechaConcierto`, `horaConcierto`, `tituloConcierto`, `duracionConcierto`, `precioConcierto`, `idPrograma`, `idTemporada`, `idGrupo`, `idOrquesta`, `cedulaMusico`) VALUES
('A', '2016-07-12', '12:00', 'La Oda de la farsa', '2h', 35550, 6, 3, NULL, 2, NULL),
('B', '2016-05-24', '12:00', 'Safiro', '2h10min', 40000, 2, 2, 1, NULL, NULL),
('C', '2016-07-22', '16:00', 'Tadeus Onomato', '2h', 35000, 2, 3, NULL, NULL, '2 22222222'),
('D', '2017-03-12', '15:00', 'Le  canta la gallina', '4h', 55600, 6, 4, 5, NULL, NULL),
('E', '2017-03-12', '12:30', 'San Song', '2h20min', 40000, 1, 4, NULL, NULL, '5 55555555'),
('F', '2017-12-22', '14:30', 'El Papitosty', '30min', 35550, 1, 6, NULL, 2, NULL),
('G', '2017-12-12', '12:30', 'La Oda de la farsa parte 2', '2h30min', 35550, 5, 6, NULL, NULL, '8 88888888'),
('H', '2017-07-12', '11:00', 'Welcome', '1h30min', 60000, 4, 5, NULL, 7, NULL),
('I', '2016-04-22', '18:00', 'The Journey', '2h', 10100, 5, 2, NULL, 6, NULL),
('J', '2015-07-12', '22:00', 'Sistema del sonido molecular', '2h40min', 35550, 3, 1, 2, NULL, NULL),
('K', '2015-07-12', '22:30', 'Rodeando latas', '2h', 40000, 3, 1, NULL, 10, NULL),
('L', '2016-04-24', '12:00', 'Carisma tico', '3h', 30500, 4, 2, NULL, NULL, '6 66666666');

-- --------------------------------------------------------

--
-- Table structure for table `director`
--

CREATE TABLE IF NOT EXISTS `director` (
  `idDirector` int(10) unsigned NOT NULL,
  `telDirector` varchar(255) NOT NULL,
  `nombreDirector` varchar(255) NOT NULL,
  `emailDirector` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `director`
--

INSERT INTO `director` (`idDirector`, `telDirector`, `nombreDirector`, `emailDirector`) VALUES
(1, '2234-4545', 'Leopoldo Castro', 'leocastro@mail.com'),
(2, '2333-5666 2445-6767', 'Henry Pol', 'henpol34@mail.com'),
(3, '8878-9090', 'Terrene Sanchez', 'tsanchez45@mail.com'),
(4, '8878-6754 8686-2222', 'Calvin Pol', 'clavtres54@mail.com'),
(5, '2222-5555', 'Teodoro Tyler', 'teyler89@mail.com');

-- --------------------------------------------------------

--
-- Table structure for table `entrada`
--

CREATE TABLE IF NOT EXISTS `entrada` (
  `codEntrada` varchar(255) NOT NULL,
  `numAsiento` int(10) NOT NULL,
  `numFila` int(10) NOT NULL,
  `idConcierto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `espectador`
--

CREATE TABLE IF NOT EXISTS `espectador` (
  `cedulaEspectador` varchar(255) NOT NULL,
  `nombreEspectador` varchar(255) NOT NULL,
  `emailEspectador` varchar(255) NOT NULL,
  `cantidadEntradas` int(11) NOT NULL,
  `idConcierto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `grupo`
--

CREATE TABLE IF NOT EXISTS `grupo` (
  `idGrupo` int(10) unsigned NOT NULL,
  `nombreGrupo` varchar(255) NOT NULL,
  `numIntegrantes` int(10) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `telGrupo` varchar(255) NOT NULL,
  `emailGrupo` varchar(255) NOT NULL,
  `musico1` varchar(255) DEFAULT NULL,
  `musico2` varchar(255) DEFAULT NULL,
  `musico3` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `grupo`
--

INSERT INTO `grupo` (`idGrupo`, `nombreGrupo`, `numIntegrantes`, `tipo`, `telGrupo`, `emailGrupo`, `musico1`, `musico2`, `musico3`) VALUES
(1, 'Headache', 2, 'Heavy Metal', '2211-3322', 'grupo1@email.com', '1 11111111', '2 22222222', NULL),
(2, 'Bad noise', 3, 'Baladas', '6487-9022', 'grupo2@email.com', '3 33333333', '4 44444444', '5 55555555'),
(3, 'Chararala', 3, 'Salsa', '6487-9078', 'grupo3@email.com', '6 66666666', '7 77777777', '8 88888888'),
(4, 'Sora-sora', 2, 'J-pop', '6727-9078', 'grupo4@email.com', '1 11111111', '8 88888888', NULL),
(5, 'Sudar nadar', 3, 'kumbia', '6727-5578', 'grupo5@email.com', '5 55555555', '2 22222222', '8 88888888');

-- --------------------------------------------------------

--
-- Table structure for table `musico`
--

CREATE TABLE IF NOT EXISTS `musico` (
  `cedulaMusico` varchar(255) NOT NULL,
  `nombreMusico` varchar(255) NOT NULL,
  `instrumento` varchar(255) NOT NULL,
  `cvMusico` varchar(255) NOT NULL,
  `telMusico` varchar(255) NOT NULL,
  `emailMusico` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `musico`
--

INSERT INTO `musico` (`cedulaMusico`, `nombreMusico`, `instrumento`, `cvMusico`, `telMusico`, `emailMusico`) VALUES
('1 11111111', 'Betoven Corella', 'piano', 'http//www.CVBetoven.com', '1111-1111', 'betoven@email.com'),
('2 22222222', 'Antonio Pereira', 'violin', 'http//www.CVAntonio.com', '2222-2222', 'antonio@email.com'),
('3 33333333', 'Maria Alejandra', 'triangulo', 'http//www.CVAntonio.com', '3333-3333', 'maria@email.com'),
('4 44444444', 'Gabriela Mistrael', 'trompeta', 'http//www.CVGabriela.com', '4444-4444', 'gabriela@email.com'),
('5 55555555', 'Irina Montero', 'chelo', 'http//www.CVIrina.com', '5555-5555', 'irina@email.com'),
('6 66666666', 'Josue Rivera', 'flauta dulce', 'http//www.CVJosue.com', '6666-6666', 'josue@email.com'),
('7 77777777', 'Diego Cervantes', 'chelo', 'http//www.CV Diego.com', '7777-7777', 'diego@email.com'),
('8 88888888', 'Karoline Bermudez', 'violin', 'http//www.CVKaroline.com', '8888-8888', 'karoline@email.com');

-- --------------------------------------------------------

--
-- Table structure for table `orquesta`
--

CREATE TABLE IF NOT EXISTS `orquesta` (
  `idOrquesta` int(10) NOT NULL,
  `nombreOrquesta` varchar(255) NOT NULL,
  `integrantes` int(10) NOT NULL,
  `telOrquesta` varchar(255) NOT NULL,
  `idDirector` int(10) unsigned NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orquesta`
--

INSERT INTO `orquesta` (`idOrquesta`, `nombreOrquesta`, `integrantes`, `telOrquesta`, `idDirector`) VALUES
(1, 'La abejita', 15, '2267-9090', 5),
(2, 'Sinfonia de Rock Simbiotico', 20, '4487-4490', 5),
(3, 'La Teoria de La Cuerda', 25, '8880-7010', 2),
(4, 'Mozart Forever', 30, '8888-8888', 1),
(5, 'Capadoccia', 20, '8676-7676', 2),
(6, 'La Sinfonica del Horror', 34, '8766-5656', 2),
(7, 'Sandwich de Notas', 16, '8998-9899', 4),
(8, 'El Beto Ven', 50, '8877-3433', 3),
(9, 'La Calle del Violin', 43, '7767-7690', 5),
(10, 'Verdadera Musica', 15, '8866-2121', 4);

-- --------------------------------------------------------

--
-- Table structure for table `programa`
--

CREATE TABLE IF NOT EXISTS `programa` (
  `idPrograma` int(10) NOT NULL,
  `cancion` varchar(255) NOT NULL,
  `autor` int(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `programa`
--

INSERT INTO `programa` (`idPrograma`, `cancion`, `autor`) VALUES
(1, 'Mi vida no la tuya, Mañana es tarde, Despues sera, Mio no tuyo, Vive sin morir, Este es otro\r\n', 1),
(2, 'Tu vida no la vida, Mañana aun hay podemos, Despues quizas, Mio y tuyo, muere despues de haber vivido, Este es el otro\r\n', 2),
(3, 'Ninguna vida, Tomorrow, Maybe, Mine, Viviendo solo, Racata', 3),
(4, 'Any any, Yesterday tomorrow, Burn in water, Minimalist, Take care, Warming', 3),
(5, 'All about us, Thinking, Flow flow, Flat in my life, Took, Hot and burn', 4),
(6, 'No es plagio, Copia de otro, El imitador, Reflejo original, Se parece, Se parece 2', 5);

-- --------------------------------------------------------

--
-- Table structure for table `temporada`
--

CREATE TABLE IF NOT EXISTS `temporada` (
  `idTemporada` int(10) NOT NULL,
  `tipoTemporada` varchar(255) NOT NULL,
  `fechaInicio` date NOT NULL,
  `fechaFinal` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `temporada`
--

INSERT INTO `temporada` (`idTemporada`, `tipoTemporada`, `fechaInicio`, `fechaFinal`) VALUES
(1, 'Otoño-Invierno', '2015-11-20', '2015-12-31'),
(2, 'Primavera', '2016-04-04', '2016-06-25'),
(3, 'Verano', '2016-07-01', '2016-11-15'),
(4, 'Primavera', '2017-03-03', '2017-06-20'),
(5, 'Verano', '2017-06-29', '2017-10-30'),
(6, 'Invierno', '2017-12-20', '2015-12-31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `autor`
--
ALTER TABLE `autor`
  ADD PRIMARY KEY (`idAutor`);

--
-- Indexes for table `concierto`
--
ALTER TABLE `concierto`
  ADD PRIMARY KEY (`idConcierto`),
  ADD KEY `idPrograma` (`idPrograma`),
  ADD KEY `idTemporada` (`idTemporada`),
  ADD KEY `idOrquesta` (`idOrquesta`),
  ADD KEY `idGrupo` (`idGrupo`),
  ADD KEY `cedulaMusico` (`cedulaMusico`);

--
-- Indexes for table `director`
--
ALTER TABLE `director`
  ADD PRIMARY KEY (`idDirector`);

--
-- Indexes for table `entrada`
--
ALTER TABLE `entrada`
  ADD PRIMARY KEY (`codEntrada`),
  ADD KEY `idConcierto` (`idConcierto`);

--
-- Indexes for table `espectador`
--
ALTER TABLE `espectador`
  ADD PRIMARY KEY (`cedulaEspectador`),
  ADD KEY `idConcierto` (`idConcierto`);

--
-- Indexes for table `grupo`
--
ALTER TABLE `grupo`
  ADD PRIMARY KEY (`idGrupo`),
  ADD KEY `musico1` (`musico1`),
  ADD KEY `musico2` (`musico2`),
  ADD KEY `musico3` (`musico3`);

--
-- Indexes for table `musico`
--
ALTER TABLE `musico`
  ADD PRIMARY KEY (`cedulaMusico`),
  ADD UNIQUE KEY `cedulaMusico` (`cedulaMusico`);

--
-- Indexes for table `orquesta`
--
ALTER TABLE `orquesta`
  ADD PRIMARY KEY (`idOrquesta`),
  ADD KEY `idDirector` (`idDirector`);

--
-- Indexes for table `programa`
--
ALTER TABLE `programa`
  ADD PRIMARY KEY (`idPrograma`),
  ADD KEY `idAutor` (`autor`);

--
-- Indexes for table `temporada`
--
ALTER TABLE `temporada`
  ADD PRIMARY KEY (`idTemporada`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `autor`
--
ALTER TABLE `autor`
  MODIFY `idAutor` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `director`
--
ALTER TABLE `director`
  MODIFY `idDirector` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `grupo`
--
ALTER TABLE `grupo`
  MODIFY `idGrupo` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `orquesta`
--
ALTER TABLE `orquesta`
  MODIFY `idOrquesta` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `programa`
--
ALTER TABLE `programa`
  MODIFY `idPrograma` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `temporada`
--
ALTER TABLE `temporada`
  MODIFY `idTemporada` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `concierto`
--
ALTER TABLE `concierto`
  ADD CONSTRAINT `concierto_ibfk_1` FOREIGN KEY (`idPrograma`) REFERENCES `programa` (`idPrograma`),
  ADD CONSTRAINT `concierto_ibfk_2` FOREIGN KEY (`idTemporada`) REFERENCES `temporada` (`idTemporada`),
  ADD CONSTRAINT `concierto_ibfk_4` FOREIGN KEY (`idOrquesta`) REFERENCES `orquesta` (`idOrquesta`),
  ADD CONSTRAINT `concierto_ibfk_5` FOREIGN KEY (`idGrupo`) REFERENCES `grupo` (`idGrupo`),
  ADD CONSTRAINT `concierto_ibfk_6` FOREIGN KEY (`cedulaMusico`) REFERENCES `musico` (`cedulaMusico`);

--
-- Constraints for table `entrada`
--
ALTER TABLE `entrada`
  ADD CONSTRAINT `entrada_ibfk_1` FOREIGN KEY (`idConcierto`) REFERENCES `concierto` (`idConcierto`);

--
-- Constraints for table `espectador`
--
ALTER TABLE `espectador`
  ADD CONSTRAINT `espectador_ibfk_1` FOREIGN KEY (`idConcierto`) REFERENCES `concierto` (`idConcierto`);

--
-- Constraints for table `grupo`
--
ALTER TABLE `grupo`
  ADD CONSTRAINT `grupo_ibfk_1` FOREIGN KEY (`musico1`) REFERENCES `musico` (`cedulaMusico`),
  ADD CONSTRAINT `grupo_ibfk_2` FOREIGN KEY (`musico2`) REFERENCES `musico` (`cedulaMusico`),
  ADD CONSTRAINT `grupo_ibfk_3` FOREIGN KEY (`musico3`) REFERENCES `musico` (`cedulaMusico`);

--
-- Constraints for table `orquesta`
--
ALTER TABLE `orquesta`
  ADD CONSTRAINT `orquesta_ibfk_1` FOREIGN KEY (`idDirector`) REFERENCES `director` (`idDirector`);

--
-- Constraints for table `programa`
--
ALTER TABLE `programa`
  ADD CONSTRAINT `programa_ibfk_1` FOREIGN KEY (`autor`) REFERENCES `autor` (`idAutor`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
