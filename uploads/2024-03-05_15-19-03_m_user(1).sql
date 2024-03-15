-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 04, 2024 at 09:57 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_bubur_onic`
--

-- --------------------------------------------------------

--
-- Table structure for table `m_user`
--

CREATE TABLE `m_user` (
  `u_id` varchar(191) NOT NULL,
  `u_name` varchar(191) NOT NULL,
  `u_code` varchar(191) DEFAULT NULL,
  `u_email` varchar(191) NOT NULL,
  `u_password` varchar(191) DEFAULT NULL,
  `title` varchar(191) DEFAULT NULL,
  `u_token` varchar(191) DEFAULT NULL,
  `u_phone` int(11) DEFAULT NULL,
  `u_gender` varchar(191) DEFAULT NULL,
  `u_date_of_birth` datetime(3) DEFAULT NULL,
  `u_address` varchar(191) DEFAULT NULL,
  `u_province_id` varchar(191) DEFAULT NULL,
  `u_city_id` varchar(191) DEFAULT NULL,
  `created_at` datetime(3) DEFAULT current_timestamp(3),
  `updated_at` datetime(3) DEFAULT NULL,
  `total_task` int(11) DEFAULT NULL,
  `u_rate` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `m_user`
--

INSERT INTO `m_user` (`u_id`, `u_name`, `u_code`, `u_email`, `u_password`, `title`, `u_token`, `u_phone`, `u_gender`, `u_date_of_birth`, `u_address`, `u_province_id`, `u_city_id`, `created_at`, `updated_at`, `total_task`, `u_rate`) VALUES
('1', 'Jajang Maulana', NULL, 'director@gmail.com', '$2b$10$tHlbsUd2DBSywheEq9H1Cu5PtqEeH96sD6BbaoWMs2cuNOtA/ekLK', 'director', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-29 21:54:55.000', '2024-01-31 15:55:32.000', NULL, NULL),
('2', 'Titin Ruyati', NULL, 'manager@gmail.com', '$2b$10$xRH8czTE1Itn6EIzPryD3.ydORor452DPuAgkN61ADY.mJPM9yCz6', 'manager', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-29 21:55:28.000', '2024-01-31 15:55:32.000', NULL, NULL),
('3', 'Darman Sukmana', NULL, 'supervisor@gmail.com', '$2b$10$0xPd.1lOCa7VGHgH73Cwpu3sHgfPH5sG20miDcegfbUGLvcP8W/4C', 'supervisor', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-29 21:56:00.000', '2024-01-31 15:55:32.000', NULL, NULL),
('4', 'Maria Mariadi', NULL, 'worker@gmail.com', '$2b$10$9P/1YFqhh9ru1OHlm8bNtegtirPgc.PTIODqIV0hdtskiWV3zLXGq', 'worker', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-29 21:56:58.000', '2024-01-29 21:56:58.000', NULL, NULL),
('5', 'Lilis Surtiani', NULL, 'operator@gmail.com', '$2b$10$a23T24t1n/pR0.j1AKniC.H5ZyzfHmK4xfq6CAwjJpvNw9vs/LLO2', 'operator', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-01-29 21:57:50.000', '2024-01-31 15:55:32.000', NULL, NULL),
('clt2ewpa90000quc7gq3ts7nq', 'operator2', NULL, 'operator2@gmail.com', '$2b$10$8Ku7bH9MtWujIu/6xgFgh.Coq7KVP3sbPgFw7CGZXoCWI/a/RasUK', 'operator', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-26 04:01:46.497', '2024-02-26 04:01:46.497', NULL, NULL),
('clt2eypym0001quc77ytjk7s6', 'manager1', NULL, 'manager1@gmail.com', '$2b$10$O6sYJwRGUwUoXuochGXp0uVAD.SXhu4953HntxQHcRCIX7GF5/eh.', 'manager', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-26 04:03:20.640', '2024-02-26 04:03:20.640', NULL, NULL),
('clt2eyw050002quc7o5rysa79', 'manager2', NULL, 'manager2@gmail.com', '$2b$10$aVX4oODlTBsn5T67r.hW8.IdD7TDIz3k29/G/yuN67vkgfDf2ue8K', 'manager', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-26 04:03:28.518', '2024-02-26 04:03:28.518', NULL, NULL),
('clt2fpe9k0000qzj6dkk62q7m', 'apih', NULL, 'manager10@gmail.com', '$2b$10$u/iKIXviy5bpJN.kdQUtIedFk3U20u6K29j/R/aP98Xy..NHka85i', 'manager', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-26 04:24:05.239', '2024-02-26 04:24:05.239', NULL, NULL),
('clt2g0e5w0001qzj6nud7wt4t', 'roni', NULL, 'bambang12@gmail.com', '$2b$10$0M08hpLq.2E0X6ByEB1XveNBXkTzS8d6XtwxNZc4Yu7p5BtELA9e2', 'supervisor', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-26 04:32:38.324', '2024-02-26 04:32:38.324', NULL, NULL),
('ope 1', 'operator1', NULL, 'operator1@gmail.com', '$2b$10$.UHWeBG927MIR8IF1qj/Tekepq55RI3XqDOmZwuiSVdF2245M.mFK', 'operator', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-26 03:58:30.845', '2024-02-26 03:58:30.845', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `m_user`
--
ALTER TABLE `m_user`
  ADD PRIMARY KEY (`u_id`),
  ADD UNIQUE KEY `m_user_u_email_key` (`u_email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
