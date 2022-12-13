-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-12-2022 a las 01:15:18
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `music`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `album`
--

CREATE TABLE `album` (
  `IDAlbum` int(11) NOT NULL,
  `Nombre` varchar(20) NOT NULL,
  `Imagenurl` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `album`
--

INSERT INTO `album` (`IDAlbum`, `Nombre`, `Imagenurl`) VALUES
(1, 'El ultimo tour', NULL),
(2, 'YHLQMDLG', NULL),
(3, 'OASIS', NULL),
(4, 'After Hours', NULL),
(5, 'Starboy', NULL),
(6, 'Porpuse', NULL),
(7, 'Scorpion', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `artista`
--

CREATE TABLE `artista` (
  `IDArtista` int(11) NOT NULL,
  `Nombre` varchar(20) NOT NULL,
  `Apellido` varchar(20) DEFAULT NULL,
  `Imagenurl` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `artista`
--

INSERT INTO `artista` (`IDArtista`, `Nombre`, `Apellido`, `Imagenurl`) VALUES
(1, 'Bad', 'Bunny', NULL),
(2, 'The weeknd', NULL, NULL),
(3, 'Justin', 'Bieber', NULL),
(4, 'Drake', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cancion`
--

CREATE TABLE `cancion` (
  `IDCancion` int(11) NOT NULL,
  `IDAlbum` int(11) NOT NULL,
  `IDArtista` int(11) NOT NULL,
  `Minutos` decimal(4,2) NOT NULL,
  `Nombre` varchar(20) NOT NULL,
  `Genero` varchar(20) NOT NULL,
  `Imageurl` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cancion`
--

INSERT INTO `cancion` (`IDCancion`, `IDAlbum`, `IDArtista`, `Minutos`, `Nombre`, `Genero`, `Imageurl`) VALUES
(1, 1, 1, '2.45', 'El mundo es mio', 'Trap', NULL),
(2, 1, 1, '3.34', 'Maldita pobreza', 'Trap', NULL),
(3, 2, 1, '2.51', 'Si veo a tu mama', 'Trap', NULL),
(4, 2, 1, '3.27', 'La santa', 'Trap', NULL),
(5, 3, 1, '3.07', 'Mojaita', 'Trap', NULL),
(6, 3, 1, '4.10', 'Yo le llego', 'Trap', NULL),
(7, 4, 2, '4.10', 'Alone again', 'R y B/Soul', NULL),
(8, 4, 2, '3.11', 'Scared to life', 'R y B/Soul', NULL),
(9, 5, 2, '3.50', 'Starboy', 'R y B/Soul', NULL),
(10, 5, 2, '3.38', 'Reminder', 'R y B/Soul', NULL),
(16, 6, 3, '3.20', 'Sorry', 'Pop', NULL),
(17, 7, 4, '2.16', 'Survival', 'Hip-Hop', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuenta`
--

CREATE TABLE `cuenta` (
  `IDUsuario` int(11) NOT NULL,
  `Nombre` varchar(20) NOT NULL,
  `Apellido` varchar(20) NOT NULL,
  `Username` varchar(20) NOT NULL,
  `Fecha_Nacimiento` date NOT NULL DEFAULT current_timestamp(),
  `Correo` varchar(80) NOT NULL,
  `Contrasena` varchar(20) NOT NULL,
  `Genero` bit(1) NOT NULL DEFAULT b'1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cuenta`
--

INSERT INTO `cuenta` (`IDUsuario`, `Nombre`, `Apellido`, `Username`, `Fecha_Nacimiento`, `Correo`, `Contrasena`, `Genero`) VALUES
(0, 'John', 'Doe', 'JohnDoe', '2022-12-02', 'johndoe@capitalmusic.com', '1234', b'1'),
(1, 'Josue', 'Garcia', 'JGarcia', '2001-03-11', 'jgarcia@capitalmusic.com', 'Robot123', b'1'),
(2, 'Alicia', 'Luna', 'AliceMoon', '2022-12-02', 'AliceMoon@gmail.com', 'Moon', b'0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `playlist`
--

CREATE TABLE `playlist` (
  `IDPlaylist` int(11) NOT NULL,
  `IDUser` int(11) NOT NULL,
  `Nombre` varchar(20) NOT NULL DEFAULT 'Playlist'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `playlist`
--

INSERT INTO `playlist` (`IDPlaylist`, `IDUser`, `Nombre`) VALUES
(1, 0, 'Mi Primer playlist');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `playlist_user`
--

CREATE TABLE `playlist_user` (
  `IDPlaylist` int(11) NOT NULL,
  `IDCancion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `playlist_user`
--

INSERT INTO `playlist_user` (`IDPlaylist`, `IDCancion`) VALUES
(1, 1),
(1, 2),
(1, 4),
(1, 5),
(1, 7);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `album`
--
ALTER TABLE `album`
  ADD PRIMARY KEY (`IDAlbum`);

--
-- Indices de la tabla `artista`
--
ALTER TABLE `artista`
  ADD PRIMARY KEY (`IDArtista`);

--
-- Indices de la tabla `cancion`
--
ALTER TABLE `cancion`
  ADD PRIMARY KEY (`IDCancion`),
  ADD KEY `IDArtista` (`IDArtista`),
  ADD KEY `IDAlbum` (`IDAlbum`);

--
-- Indices de la tabla `cuenta`
--
ALTER TABLE `cuenta`
  ADD PRIMARY KEY (`IDUsuario`),
  ADD UNIQUE KEY `Username` (`Username`);

--
-- Indices de la tabla `playlist`
--
ALTER TABLE `playlist`
  ADD PRIMARY KEY (`IDPlaylist`),
  ADD KEY `IDUser` (`IDUser`);

--
-- Indices de la tabla `playlist_user`
--
ALTER TABLE `playlist_user`
  ADD KEY `IDPlaylist` (`IDPlaylist`,`IDCancion`),
  ADD KEY `IDCancion` (`IDCancion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `album`
--
ALTER TABLE `album`
  MODIFY `IDAlbum` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `artista`
--
ALTER TABLE `artista`
  MODIFY `IDArtista` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `cancion`
--
ALTER TABLE `cancion`
  MODIFY `IDCancion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `cuenta`
--
ALTER TABLE `cuenta`
  MODIFY `IDUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `playlist`
--
ALTER TABLE `playlist`
  MODIFY `IDPlaylist` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cancion`
--
ALTER TABLE `cancion`
  ADD CONSTRAINT `cancion_ibfk_1` FOREIGN KEY (`IDArtista`) REFERENCES `artista` (`IDArtista`),
  ADD CONSTRAINT `cancion_ibfk_2` FOREIGN KEY (`IDAlbum`) REFERENCES `album` (`IDAlbum`);

--
-- Filtros para la tabla `playlist`
--
ALTER TABLE `playlist`
  ADD CONSTRAINT `playlist_ibfk_1` FOREIGN KEY (`IDUser`) REFERENCES `cuenta` (`IDUsuario`);

--
-- Filtros para la tabla `playlist_user`
--
ALTER TABLE `playlist_user`
  ADD CONSTRAINT `playlist_user_ibfk_1` FOREIGN KEY (`IDPlaylist`) REFERENCES `playlist` (`IDPlaylist`),
  ADD CONSTRAINT `playlist_user_ibfk_2` FOREIGN KEY (`IDCancion`) REFERENCES `cancion` (`IDCancion`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
