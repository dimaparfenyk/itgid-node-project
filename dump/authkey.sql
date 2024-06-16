-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 21, 2023 at 07:11 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node_2024`
--

-- --------------------------------------------------------

--
-- Table structure for table `authkey`
--

CREATE TABLE `authkey` (
  `authkey` varchar(44) COLLATE utf8mb4_general_ci NOT NULL,
  `userid` int NOT NULL,
  `created_at` int DEFAULT NULL,
  `updated_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `authkey`
--

INSERT INTO `authkey` (`authkey`, `userid`, `created_at`, `updated_at`) VALUES
('B4seYqW7FhMfCEbxOuuGzCRrpKReD9eZec9NsAhJFKCX', 1, 1695217690, 1695217690),
('zkUez32zna7Ea7vgMmyOXl1FnfPpiIbotfVSzCBtj2am', 1, 1695218111, 1695218111);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authkey`
--
ALTER TABLE `authkey`
  ADD PRIMARY KEY (`authkey`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
