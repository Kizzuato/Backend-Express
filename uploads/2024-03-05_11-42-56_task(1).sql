-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 04, 2024 at 09:56 AM
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
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `id` varchar(191) NOT NULL,
  `task_type` varchar(191) DEFAULT NULL,
  `task_title` varchar(191) DEFAULT NULL,
  `priority` varchar(191) DEFAULT NULL,
  `start_date` datetime(3) DEFAULT NULL,
  `due_date` datetime(3) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `pic` varchar(191) DEFAULT NULL,
  `spv` varchar(191) DEFAULT NULL,
  `status` varchar(191) DEFAULT 'Wait-app',
  `progress` int(11) DEFAULT 0,
  `iteration` varchar(191) DEFAULT NULL,
  `approved_at` datetime(3) DEFAULT NULL,
  `approved_by` varchar(191) DEFAULT NULL,
  `created_at` datetime(3) DEFAULT current_timestamp(3),
  `deleted_at` datetime(3) DEFAULT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `finished_by` varchar(191) DEFAULT NULL,
  `fileName` varchar(191) DEFAULT NULL,
  `filePath` varchar(191) DEFAULT NULL,
  `fileSize` varchar(191) DEFAULT NULL,
  `updated_at` datetime(3) DEFAULT NULL,
  `pic_title` varchar(191) DEFAULT NULL,
  `started_at` datetime(3) DEFAULT NULL,
  `started_by` varchar(191) DEFAULT NULL,
  `created_by` varchar(191) DEFAULT NULL,
  `pic_id` varchar(191) DEFAULT NULL,
  `spv_id` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `task_type`, `task_title`, `priority`, `start_date`, `due_date`, `description`, `pic`, `spv`, `status`, `progress`, `iteration`, `approved_at`, `approved_by`, `created_at`, `deleted_at`, `finished_at`, `finished_by`, `fileName`, `filePath`, `fileSize`, `updated_at`, `pic_title`, `started_at`, `started_by`, `created_by`, `pic_id`, `spv_id`) VALUES
('clsed5w2s0001g7dulqj2eq49', 'Single', 'Task buatan Manager 1', 'Important', '2024-01-31 17:00:00.000', '2024-02-13 17:00:00.000', 'Desc untuk task buatan manager 1 done pak ', 'Bambang', 'Didit', 'Deleted', 90, NULL, '2024-02-09 08:07:22.826', NULL, '2024-02-09 08:06:27.747', '2024-02-09 08:19:44.797', '2024-02-09 08:18:03.186', NULL, NULL, NULL, NULL, '2024-02-09 08:19:44.817', 'manager', '2024-02-09 08:17:56.846', NULL, NULL, NULL, NULL),
('clsedmz2q0002g7duokdb8cmz', 'Single', 'Task buatan Manager 1', 'Important', '2024-01-31 17:00:00.000', '2024-02-13 17:00:00.000', 'Desc untuk task buatan manager 1 done pak  \n Director: salah bang', 'Bambang', 'Didit', 'Deleted', 0, NULL, NULL, NULL, '2024-02-09 08:19:44.787', '2024-02-10 09:06:11.732', NULL, NULL, NULL, NULL, NULL, '2024-02-10 09:06:11.742', 'manager', NULL, NULL, NULL, NULL, NULL),
('clsejd30v0000js787d6e118j', 'Single', 'task buatan director 1', 'High', '2024-02-01 17:00:00.000', '2024-02-21 17:00:00.000', 'benerin \n PIC: siap \n PIC: done ya pak noice', 'Rani', 'Didit', 'Deleted', 30, NULL, '2024-02-26 16:39:27.507', NULL, '2024-02-09 11:00:01.029', '2024-02-26 16:42:41.926', NULL, NULL, NULL, NULL, NULL, '2024-02-26 16:42:41.962', 'director', NULL, NULL, NULL, NULL, NULL),
('clsfsyt7m0000inpnivjb0buf', 'Multi', 'Manager 1 Multi task', 'Normal', '2024-02-01 17:00:00.000', '2024-02-28 17:00:00.000', 'desc for this task', 'Rani', NULL, 'Open', 0, NULL, '2024-02-10 08:17:25.244', NULL, '2024-02-10 08:16:37.462', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-10 08:17:25.265', 'director', NULL, NULL, NULL, NULL, NULL),
('clsft1ct00001inpnp2zaa4s4', 'Multi', 'tugas multi manager', 'Normal', '2024-02-07 17:00:00.000', '2024-02-27 17:00:00.000', 'desc Tami sibuk pak, jadi saya yang mengerjakan done pak \n PIC: yang bener aje \n Director: rugi dong \n Director: revisi revisi \n Manager: siap pak', 'Rani,Tami', 'Rian', 'Deleted', 90, NULL, '2024-02-10 08:19:02.030', NULL, '2024-02-10 08:18:36.180', '2024-02-10 08:40:36.339', '2024-02-10 08:33:29.649', NULL, NULL, NULL, NULL, '2024-02-10 08:40:36.367', 'manager', '2024-02-10 08:33:13.903', NULL, NULL, NULL, NULL),
('clsfttnfh0002inpnu1h33fje', 'Multi', 'tugas multi manager', 'Normal', '2024-02-07 17:00:00.000', '2024-02-27 17:00:00.000', 'desc Tami sibuk pak, jadi saya yang mengerjakan done pak \n PIC: yang bener aje \n Director: rugi dong \n Director: revisi revisi \n Manager: siap pak \n Manager: Done ya pak \n Director: Finish dulu \n Manager: oke pak \n Director: bagus \n Director: gajadi ya', 'Rani,Tami', 'Rian', 'Deleted', 100, NULL, '2024-02-19 04:54:01.194', NULL, '2024-02-10 08:40:36.318', '2024-02-26 16:45:00.667', '2024-02-10 08:48:15.644', NULL, NULL, NULL, NULL, '2024-02-26 16:45:00.865', 'manager', '2024-02-10 08:41:00.650', NULL, NULL, NULL, NULL),
('clsfuqk570000q1c1e11slkmf', 'Single', 'Task buatan Manager 1', 'Important', '2024-01-31 17:00:00.000', '2024-02-13 17:00:00.000', 'Desc untuk task buatan manager 1 done pak  \n Director: salah bang', 'Bambang', 'Didit', 'deleted', 0, NULL, NULL, NULL, '2024-02-10 09:06:11.706', '2024-02-10 09:06:34.526', NULL, NULL, NULL, NULL, NULL, '2024-02-10 09:06:34.551', 'manager', NULL, NULL, NULL, NULL, NULL),
('clsfvnnzv0001q1c14h7z1zit', 'Single', 'Task Buat Manager', 'High', '2024-02-01 17:00:00.000', '2024-02-19 17:00:00.000', 'Desc \n \n Manager: ok', 'Rani', 'Rian', 'Deleted', 75, NULL, '2024-02-10 09:39:46.652', NULL, '2024-02-10 09:31:56.346', '2024-02-27 04:34:42.339', '2024-02-10 09:55:08.490', NULL, NULL, NULL, NULL, '2024-02-27 04:34:46.279', 'manager', '2024-02-10 09:49:07.033', NULL, NULL, NULL, NULL),
('clsiejnkb0000ou0mm8xekeii', 'Single', 'Task buatan Operator 1', 'High', '2024-02-01 17:00:00.000', '2024-02-21 17:00:00.000', 'Desc buat tugas operator 1 \n Director: mana pic nya', NULL, 'Kusuma', 'Idle', 0, NULL, NULL, NULL, '2024-02-12 03:56:14.217', '2024-02-12 04:13:36.619', NULL, NULL, NULL, NULL, NULL, '2024-02-26 12:04:17.498', 'operator', NULL, NULL, NULL, NULL, NULL),
('clsieo1xd0001ou0m2ff92hxh', 'Single', 'Task Baru Buatan Operator', 'High', '2024-02-01 17:00:00.000', '2024-02-23 17:00:00.000', 'Contoh desc \n Director: target 100% ya', 'Lilis Surtiani', 'Kusuma', 'Idle', 0, NULL, '2024-02-12 04:08:01.598', NULL, '2024-02-12 03:59:39.457', '2024-02-26 06:23:50.337', NULL, NULL, NULL, NULL, NULL, '2024-02-26 12:04:26.392', 'operator', NULL, NULL, NULL, NULL, NULL),
('clsihtphu0000a0eqeevdjrmh', 'Single', 'Task buat Manager', 'Normal', '2024-01-31 17:00:00.000', '2024-02-23 17:00:00.000', 'Desc buatan Direc \n', 'worker@gmail.com', 'director@gmail.com', 'Open', 0, NULL, '2024-02-19 04:53:30.533', NULL, '2024-02-12 05:28:02.110', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-19 04:53:30.557', 'manager', NULL, NULL, 'Jajang Maulana', NULL, NULL),
('clsii6sdc0000g2kowtgjyw9y', 'Single', 'Task Baru Buatan Jajang', 'Normal', '2024-02-08 17:00:00.000', '2024-02-09 17:00:00.000', 'Desc \n', 'manager@gmail.com', 'director@gmail.com', 'Idle', 0, NULL, NULL, NULL, '2024-02-12 05:38:12.379', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-19 09:24:49.180', 'manager', NULL, NULL, 'Jajang', NULL, NULL),
('clsilw4ag0000yq9c96srd27d', 'Single', 'Test', 'Important', '2024-02-01 17:00:00.000', '2024-02-20 17:00:00.000', 'desc \n \n Director: fix it', 'worker@gmail.com', 'director@gmail.com', 'Deleted', 0, NULL, NULL, NULL, '2024-02-12 07:21:53.070', '2024-02-12 08:23:29.691', NULL, NULL, NULL, NULL, NULL, '2024-02-12 08:23:29.713', 'manager', NULL, NULL, NULL, NULL, NULL),
('clsio3cln0000srigixbqxwly', 'Single', 'Test', 'Important', '2024-02-01 17:00:00.000', '2024-02-20 17:00:00.000', 'desc \n \n Director: fix it', 'worker@gmail.com', 'director@gmail.com', 'Open', 0, NULL, NULL, NULL, '2024-02-12 08:23:29.675', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-12 08:23:29.675', 'manager', NULL, NULL, NULL, NULL, NULL),
('clsipgvg00005srig4jb1wlez', 'Single', 'Task Title', 'High', '2024-02-05 17:00:00.000', '2024-02-21 17:00:00.000', 'Desc \n', 'worker@gmail.com', 'director@gmail.com', 'Deleted', 0, NULL, NULL, NULL, '2024-02-12 09:02:00.203', '2024-02-27 08:24:48.502', NULL, NULL, NULL, NULL, NULL, '2024-02-27 08:24:47.176', 'manager', NULL, NULL, NULL, '', ''),
('clsipiujj0006srigjl64a86k', 'Single', 'test', 'High', '2024-02-04 17:00:00.000', '2024-02-21 17:00:00.000', 'desc \n', 'supervisor@gmail.com', 'director@gmail.com', 'Open', 0, NULL, '2024-02-27 12:20:20.072', NULL, '2024-02-12 09:03:32.382', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-27 12:20:20.753', 'manager', NULL, NULL, NULL, '', ''),
('clsiq06st0007srigqvn7hnc5', 'Single', 'tes', 'High', '2024-02-08 17:00:00.000', '2024-02-27 17:00:00.000', 'tes \n', 'worker@gmail.com', 'director@gmail.com', 'Wait-app', 0, NULL, NULL, NULL, '2024-02-12 09:17:01.420', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-12 09:17:01.420', 'manager', NULL, NULL, NULL, '', ''),
('clssgsrfv00002gd1ibzrprcr', 'Single', 'Tes Direc', 'Important', '2024-02-01 23:30:00.000', '2024-02-29 13:30:00.000', 'desc tes \n', 'operator@gmail.com', 'director@gmail.com', 'Open', 0, NULL, '2024-02-19 04:59:55.192', NULL, '2024-02-19 04:57:00.138', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-19 04:59:55.318', 'manager', NULL, NULL, NULL, '', ''),
('clssgxp810000es2zv5wwjqj5', 'Single', 'tes crby', 'Normal', '2024-02-10 11:30:00.000', '2024-02-21 23:30:00.000', 'Desc \n', 'operator@gmail.com', 'director@gmail.com', 'Wait-app', 0, NULL, NULL, NULL, '2024-02-19 05:00:50.545', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-19 05:00:50.545', 'manager', NULL, NULL, 'director@gmail.com', '', ''),
('clsso4eid00003s64dk3u9e0g', 'Single', 'task buat nyobain file', 'High', '2024-02-08 17:00:00.000', '2024-02-22 17:00:00.000', 'desc \n', 'worker@gmail.com', 'director@gmail.com', 'Wait-app', 0, NULL, NULL, NULL, '2024-02-19 08:22:00.565', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-19 08:22:00.565', 'manager', NULL, NULL, 'director@gmail.com', '', ''),
('clt2wirjp00002q2xvtgwyhbo', 'Single', 'sda', 'High', '2024-02-28 17:00:00.000', '2024-03-19 17:00:00.000', 'desc \n \n Director: test', 'manager10@gmail.com', '', 'Deleted', 66, NULL, '2024-02-27 07:49:46.537', NULL, '2024-02-26 12:14:49.332', '2024-02-27 07:50:16.087', NULL, NULL, NULL, NULL, NULL, '2024-02-27 07:50:16.846', 'operator', '2024-02-27 07:23:55.003', NULL, 'operator@gmail.com', '', ''),
('clt2xp6lo00012q2x49gzdlsn', 'Single', 'lkda', 'High', '2024-02-23 17:00:00.000', '2024-03-25 17:00:00.000', 'desc \n', 'manager2@gmail.com', 'bambang12@gmail.com', 'Wait-app', 0, NULL, NULL, NULL, '2024-02-26 12:47:48.393', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-26 12:47:48.393', 'supervisor', NULL, NULL, 'bambang12@gmail.com', '', ''),
('clt2xs98500022q2xhw9mtii9', 'Single', 'taslds', 'Normal', '2024-02-24 17:00:00.000', '2024-03-19 17:00:00.000', 'desc \n', 'manager2@gmail.com', 'bambang12@gmail.com', 'Open', 0, NULL, '2024-02-29 06:03:04.948', NULL, '2024-02-26 12:50:11.765', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-29 06:03:04.965', 'supervisor', NULL, NULL, 'bambang12@gmail.com', '', ''),
('clt2xxcdk00032q2x7023km68', 'Single', 'test supervisor edit', 'High', '2024-03-20 05:30:00.000', '2024-03-30 17:00:00.000', 'test supervisor\n \n', 'manager@gmail.com', 'akubukanmanager@gmail.com', 'Close', 0, NULL, '2024-03-02 07:35:05.116', NULL, '2024-02-26 12:54:09.128', NULL, NULL, NULL, NULL, NULL, NULL, '2024-03-02 07:35:05.228', 'supervisor', NULL, NULL, 'akubukanmanager@gmail.com', '', ''),
('clt2y0lvc00042q2x4bra5489', 'Single', 'test supervisor', 'High', '2024-02-25 17:00:00.000', '2024-02-27 17:00:00.000', 'test supervisor \n', 'manager@gmail.com', 'akubukanmanager@gmail.com', 'Deleted', 0, NULL, '2024-02-26 13:33:40.353', NULL, '2024-02-26 12:56:41.400', '2024-02-26 13:47:49.232', NULL, NULL, NULL, NULL, NULL, '2024-02-26 13:47:49.997', 'supervisor', NULL, NULL, 'akubukanmanager@gmail.com', '', ''),
('clt2zucys00052q2xt5vhjex6', 'Single', 'test supervisor', 'High', '2024-02-25 17:00:00.000', '2024-02-27 17:00:00.000', 'test supervisor \n', 'manager@gmail.com', 'akubukanmanager@gmail.com', 'Deleted', 0, NULL, NULL, NULL, '2024-02-26 13:47:49.155', '2024-02-26 13:49:32.305', NULL, NULL, NULL, NULL, NULL, '2024-02-26 13:49:32.607', 'supervisor', NULL, NULL, NULL, NULL, NULL),
('clt2zwki700062q2xidq5k49r', 'Single', 'test supervisor', 'High', '2024-02-25 17:00:00.000', '2024-02-27 17:00:00.000', 'test supervisor \n', 'manager@gmail.com', 'akubukanmanager@gmail.com', 'Deleted', 0, NULL, NULL, NULL, '2024-02-26 13:49:32.239', '2024-02-26 13:51:11.637', NULL, NULL, NULL, NULL, NULL, '2024-02-26 13:51:11.921', 'supervisor', NULL, NULL, NULL, NULL, NULL),
('clt2zyp5o00072q2xj5w8785h', 'Single', 'test supervisor', 'High', '2024-02-25 17:00:00.000', '2024-02-27 17:00:00.000', 'test supervisor \n', 'manager@gmail.com', 'akubukanmanager@gmail.com', 'Deleted', 0, NULL, NULL, NULL, '2024-02-26 13:51:11.580', '2024-02-27 07:50:51.655', NULL, NULL, NULL, NULL, NULL, '2024-02-27 07:50:50.445', 'supervisor', NULL, NULL, NULL, NULL, NULL),
('clt35vke30000j2337yivlw0e', 'Single', 'task buatan director 1', 'High', '2024-02-01 17:00:00.000', '2024-02-21 17:00:00.000', 'benerin \n PIC: siap \n PIC: done ya pak noice', 'Rani', 'Didit', 'Open', 0, NULL, NULL, NULL, '2024-02-26 16:36:43.127', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-26 16:36:43.127', 'director', NULL, NULL, NULL, NULL, NULL),
('clt3638nj0001j233pep1w7qs', 'Single', 'task buatan director 1', 'High', '2024-02-01 17:00:00.000', '2024-02-21 17:00:00.000', 'benerin \n PIC: siap \n PIC: done ya pak noice', 'Rani', 'Didit', 'Open', 0, NULL, NULL, NULL, '2024-02-26 16:42:41.167', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-26 16:42:41.167', 'director', NULL, NULL, NULL, NULL, NULL),
('clt3667u20002j233cvuyn6xc', 'Multi', 'tugas multi manager', 'Normal', '2024-02-07 17:00:00.000', '2024-02-27 17:00:00.000', 'desc Tami sibuk pak, jadi saya yang mengerjakan done pak \n PIC: yang bener aje \n Director: rugi dong \n Director: revisi revisi \n Manager: siap pak \n Manager: Done ya pak \n Director: Finish dulu \n Manager: oke pak \n Director: bagus \n Director: gajadi ya', 'Rani,Tami', 'Rian', 'Open', 0, NULL, NULL, NULL, '2024-02-26 16:45:00.075', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-26 16:45:00.075', 'manager', NULL, NULL, NULL, NULL, NULL),
('clt3viwct0000t2x4or8vyzdi', 'Single', 'Task Buat Manager', 'High', '2024-02-01 17:00:00.000', '2024-02-19 17:00:00.000', 'Desc \n \n Manager: ok', 'Rani', 'Rian', 'Open', 0, NULL, NULL, NULL, '2024-02-27 04:34:42.123', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-27 04:34:42.123', 'manager', NULL, NULL, NULL, NULL, NULL),
('clt3wze5d0000u1djny10xmj1', 'Single', 'fahridude', 'High', '2024-02-27 03:00:00.000', '2024-02-27 17:00:00.000', 'fahri halo \n \n Operator: aww \n Operator: salam 3 jari \n Director: test \n Director: revisi', 'manager2@gmail.com', 'manager@gmail.com', 'Deleted', 50, NULL, '2024-02-27 05:20:25.405', NULL, '2024-02-27 05:15:31.295', '2024-02-27 05:23:27.674', NULL, NULL, NULL, NULL, NULL, '2024-02-27 05:23:32.549', 'operator', '2024-02-27 05:16:55.316', NULL, 'manager@gmail.com', '', ''),
('clt3x9kq20001u1dj5aefkwwe', 'Single', 'fahridude', 'High', '2024-02-27 03:00:00.000', '2024-02-27 17:00:00.000', 'fahri halo \n \n Operator: aww \n Operator: salam 3 jari \n Director: test \n Director: revisi \n Director: anda ini \n Operator: ', 'manager2@gmail.com', 'manager@gmail.com', 'Deleted', 100, NULL, NULL, NULL, '2024-02-27 05:23:26.378', '2024-02-27 07:52:33.211', NULL, NULL, NULL, NULL, NULL, '2024-02-27 07:52:33.855', 'operator', '2024-02-27 05:26:49.826', NULL, NULL, NULL, NULL),
('clt41fs6n0000c42nspefu4de', 'Single', 'nama tugas', 'High', '2024-02-09 17:00:00.000', '2024-02-22 17:00:00.000', 'desc \n \n Operator: progress 68%', 'operator1@gmail.com', 'operator@gmail.com', 'Idle', 68, NULL, '2024-02-27 07:22:24.492', NULL, '2024-02-27 07:20:14.446', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-27 07:24:43.083', 'operator', '2024-02-27 07:23:12.364', NULL, 'operator@gmail.com', '', ''),
('clt42617o0003c42nlyhelw7t', 'Single', 'adsdsd', 'Important', '2024-02-23 17:00:00.000', '2025-02-17 17:00:00.000', 'asndasmds \n', 'operator2@gmail.com', 'operator@gmail.com', 'Open', 0, NULL, '2024-02-27 07:40:57.574', NULL, '2024-02-27 07:40:39.204', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-27 07:40:57.852', 'operator', NULL, NULL, 'operator@gmail.com', '', ''),
('clt42af2t0004c42nidqwh83g', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Wait-app', 0, NULL, NULL, NULL, '2024-02-27 07:44:03.798', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-27 07:44:03.798', NULL, NULL, NULL, NULL, NULL, NULL),
('clt42iead0005c42n41bq2s2y', 'Single', 'sda', 'High', '2024-02-28 17:00:00.000', '2024-03-19 17:00:00.000', 'desc \n \n Director: test', 'manager10@gmail.com', '', 'Open', 0, NULL, NULL, NULL, '2024-02-27 07:50:16.021', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-27 07:50:16.021', 'operator', NULL, NULL, NULL, NULL, NULL),
('clt42iovg0006c42nyb6phgg4', 'Single', 'test supervisor', 'High', '2024-02-25 17:00:00.000', '2024-02-27 17:00:00.000', 'test supervisor \n', 'manager@gmail.com', 'akubukanmanager@gmail.com', 'Open', 0, NULL, NULL, NULL, '2024-02-27 07:50:29.740', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-27 07:50:29.740', 'supervisor', NULL, NULL, NULL, NULL, NULL),
('clt42iq3y0007c42nbz9xkdh1', 'Single', 'test supervisor', 'High', '2024-02-25 17:00:00.000', '2024-02-27 17:00:00.000', 'test supervisor \n', 'manager@gmail.com', 'akubukanmanager@gmail.com', 'Open', 0, NULL, NULL, NULL, '2024-02-27 07:50:31.342', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-27 07:50:31.342', 'supervisor', NULL, NULL, NULL, NULL, NULL),
('clt42j41n0008c42n660byuxb', 'Single', 'test supervisor', 'High', '2024-02-25 17:00:00.000', '2024-02-27 17:00:00.000', 'test supervisor \n', 'manager@gmail.com', 'akubukanmanager@gmail.com', 'Open', 0, NULL, NULL, NULL, '2024-02-27 07:50:49.403', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-27 07:50:49.403', 'supervisor', NULL, NULL, NULL, NULL, NULL),
('clt42lc240009c42nf3vjcr6n', 'Single', 'fahridude', 'High', '2024-02-27 03:00:00.000', '2024-02-27 17:00:00.000', 'fahri halo \n \n Operator: aww \n Operator: salam 3 jari \n Director: test \n Director: revisi \n Director: anda ini \n Operator: ', 'manager2@gmail.com', 'manager@gmail.com', 'Open', 0, NULL, NULL, NULL, '2024-02-27 07:52:33.100', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-27 07:52:33.100', 'operator', NULL, NULL, NULL, NULL, NULL),
('clt43qrs70000v04xny4hbf7s', 'Single', 'Task Title', 'High', '2024-02-05 17:00:00.000', '2024-02-21 17:00:00.000', 'Desc \n', 'worker@gmail.com', 'director@gmail.com', 'Open', 0, NULL, NULL, NULL, '2024-02-27 08:24:46.373', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-27 08:24:46.373', 'manager', NULL, NULL, NULL, NULL, NULL),
('clt45jqy90001v04x7hlkd42w', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Wait-app', 0, NULL, NULL, NULL, '2024-02-27 09:15:17.935', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-27 09:15:17.935', NULL, NULL, NULL, NULL, NULL, NULL),
('clt47t2gw0002v04xrwvuyy8k', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Wait-app', 0, NULL, NULL, NULL, '2024-02-27 10:18:31.999', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-27 10:18:31.999', NULL, NULL, NULL, NULL, NULL, NULL),
('clt47usgj0003v04xemim8pn7', 'Single', 'asdasd', 'High', '2024-02-08 17:00:00.000', '2024-03-26 17:00:00.000', 'sdasdasv \n', 'manager1@gmail.com', 'manager@gmail.com', 'Open', 0, NULL, '2024-02-27 10:29:01.087', NULL, '2024-02-27 10:19:52.269', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-27 10:29:01.481', 'manager', NULL, NULL, 'manager@gmail.com', '', ''),
('clt48bhki0004v04xu565ej01', 'Single', 'dasdsa', 'High', '2024-02-27 17:00:00.000', '2024-03-30 17:00:00.000', 'sdad \n', 'operator2@gmail.com', 'manager@gmail.com', 'Open', 0, NULL, '2024-02-27 10:33:15.754', NULL, '2024-02-27 10:32:51.379', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-27 10:33:16.195', 'manager', NULL, NULL, 'manager@gmail.com', '', ''),
('clt4bpxmx0005v04x4lmzww4d', 'Single', 'skdjasdkaskj', 'Normal', '2024-02-25 17:00:00.000', '2024-03-26 17:00:00.000', 'asdasda \n', 'Titin Ruyati', 'Titin Ruyati', 'Wait-app', 0, NULL, NULL, NULL, '2024-02-27 12:08:04.232', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-27 12:08:04.232', 'manager', NULL, NULL, 'manager@gmail.com', '', ''),
('clt4c4qjg0006v04xuqhp7yvm', 'Single', 'ljkjlk', 'Normal', '2024-02-28 17:00:00.000', '2024-03-30 17:00:00.000', 'jkkkm \n', 'Maria Mariadi', 'Titin Ruyati', 'Open', 0, NULL, '2024-02-27 12:19:56.901', NULL, '2024-02-27 12:19:34.876', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-27 12:19:57.728', 'manager', NULL, NULL, 'Titin Ruyati', '', ''),
('clt4fxu8z0002njt34g8serk1', 'sigle', 'AsASD', 'High', '2024-01-31 17:00:00.000', '2024-03-31 17:00:00.000', 'desc', 'dadang', 'supri', 'Wait-app', 0, 'Weekly', NULL, NULL, '2024-02-27 14:06:11.524', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-27 14:06:11.524', 'manager', NULL, NULL, 'supri', '1223123', '312312'),
('clt4g4n0v00007zf5ndul1g9f', 'sigle', 'AsASD', 'High', '2024-01-31 17:00:00.000', '2024-03-31 17:00:00.000', 'desc', 'dadang', 'supri', 'Wait-app', 0, 'Weekly', NULL, NULL, '2024-02-27 14:11:28.783', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-27 14:11:28.783', 'manager', NULL, NULL, 'supri', '1223123', '312312'),
('clt4gayc80000o7nrm9xoey2q', 'sigle', 'AsASD', 'High', '2024-01-31 17:00:00.000', '2024-03-31 17:00:00.000', 'desc', 'dadang', 'supri', 'Wait-app', 0, 'Weekly', NULL, NULL, '2024-02-27 14:16:23.380', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-27 14:16:23.380', 'manager', NULL, NULL, 'supri', '1223123', '312312'),
('clt4gc5md0000wxk433ctvclk', 'sigle', 'AsASD', 'High', '2024-01-31 17:00:00.000', '2024-03-31 17:00:00.000', 'desc', 'dadang', 'supri', 'Wait-app', 0, 'Weekly', NULL, NULL, '2024-02-27 14:17:19.477', NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-27 14:17:19.477', 'manager', NULL, NULL, 'supri', '1223123', '312312'),
('clt4ggwb30000cy2mfuv2rguo', 'sigle', 'AsASD', 'High', '2024-01-31 17:00:00.000', '2024-03-31 17:00:00.000', 'desc', 'dadang', 'supri', 'Wait-app', 0, 'Weekly', NULL, NULL, '2024-02-27 14:21:00.687', NULL, NULL, NULL, 'download_image_1708169096335 (1).png', NULL, NULL, '2024-02-27 14:21:00.687', 'manager', NULL, NULL, 'supri', '1223123', '312312'),
('clt4hpr8x000013k2z8piv878', 'sigle', 'AsASD', 'High', '2024-01-31 17:00:00.000', '2024-03-31 17:00:00.000', 'desc', 'dadang', 'supri', 'Wait-app', 0, 'Weekly', NULL, NULL, '2024-02-27 14:55:53.648', NULL, NULL, NULL, '2024-02-27_21-55-53_download_image_1708169096335 (1).png', NULL, NULL, '2024-02-27 14:55:53.648', 'manager', NULL, NULL, 'supri', '1223123', '312312'),
('clt6s7i7d0000hgupzj6o9iz4', 'Single', 'dasda', 'Important', '2024-02-28 17:00:00.000', '2024-03-30 17:00:00.000', 'adsa \r\n', 'apih', 'Director', 'Wait-app', 0, 'daily', NULL, NULL, '2024-02-29 05:25:10.238', NULL, NULL, NULL, '2024-02-29_12-25-10_One Piece E920 - Sensasi Luar Biasa! Soba Spesial Sanji! - Bstation - Brave 28_02_2024 22_09_41.png', NULL, NULL, '2024-02-29 05:25:10.238', 'manager', NULL, NULL, 'Director', '', ''),
('clt6sgk3d0001hgupp6hgfckt', 'Single', 'dasdasdlmc', 'Normal', '2024-02-28 17:00:00.000', '2024-03-30 17:00:00.000', 'dwafa \r\n', 'manager2', 'Director', 'Open', 0, 'daily', '2024-03-04 07:06:20.661', NULL, '2024-02-29 05:32:12.547', NULL, NULL, NULL, '2024-02-29_12-32-12_One Piece E920 - Sensasi Luar Biasa! Soba Spesial Sanji! - Bstation - Brave 28_02_2024 21_51_02.png', NULL, NULL, '2024-03-04 07:06:26.228', 'manager', NULL, NULL, 'Director', '', ''),
('clt6sircy0002hgupmjvg2bzw', 'Single', 'doc', 'Important', '2024-02-28 17:00:00.000', '2024-03-30 17:00:00.000', 'deasdasd \r\n', 'Titin Ruyati', 'Director', 'Open', 0, 'daily', '2024-02-29 05:47:00.022', NULL, '2024-02-29 05:33:55.311', NULL, NULL, NULL, '2024-02-29_12-33-55_LAPORAN APLIKASI RENTAL MOBIL 2.pdf', NULL, NULL, '2024-02-29 05:47:00.063', 'manager', NULL, NULL, 'Director', '', ''),
('clt6tqsj80003hgup0bny82h1', 'Single', 'tidas', 'High', '2024-02-28 17:00:00.000', '2024-03-23 17:00:00.000', 'kjdasjdnjs \r\n', 'apih', 'Titin Ruyati', 'Deleted', 0, '', NULL, NULL, '2024-02-29 06:08:09.547', '2024-03-02 08:15:22.791', NULL, NULL, '2024-02-29_13-08-09_TUGAS BASDAT DZAKIYYA&VASYA.pdf', NULL, NULL, '2024-03-02 08:15:22.863', 'supervisor', NULL, NULL, 'Titin Ruyati', '', ''),
('clt6u3trf0004hgupzq20n11r', 'Single', 'taskk op', 'Important', '2024-02-23 17:00:00.000', '2024-03-30 17:00:00.000', 'dakwas \r\n', 'operator2', '', 'Deleted', 0, 'daily', '2024-03-02 08:09:00.122', NULL, '2024-02-29 06:18:17.835', '2024-03-04 03:33:38.180', NULL, NULL, '2024-02-29_13-18-17_jepun.pdf', NULL, NULL, '2024-03-04 03:33:38.201', 'operator', NULL, NULL, 'Darman Sukmana', '', ''),
('clt6ub3cl0005hgupjqevaowi', '', '', 'undefined', '1970-01-01 00:00:00.000', '1970-01-01 00:00:00.000', ' \r\n', 'operator2', 'Darman Sukmana', 'Wait-app', 0, '', NULL, NULL, '2024-02-29 06:23:56.827', NULL, NULL, NULL, '2024-02-29_13-23-56_Contoh Laporan PKL RPL.pdf', NULL, NULL, '2024-02-29 06:23:56.827', 'operator', NULL, NULL, 'Darman Sukmana', '', ''),
('cltcdmaz2000011e592tb466a', 'Single', 'taskk op', 'Important', '2024-02-23 17:00:00.000', '2024-03-30 17:00:00.000', 'dakwas \r\n', 'operator2', '', 'Deleted', 0, 'daily', NULL, NULL, '2024-03-04 03:23:23.531', '2024-03-04 03:32:26.767', NULL, NULL, '2024-03-04_10-23-23_blob', NULL, NULL, '2024-03-04 03:32:26.790', 'operator', NULL, NULL, NULL, NULL, NULL),
('cltcdmsrw000111e5velhg87a', 'Single', 'taskk op', 'Important', '2024-02-23 17:00:00.000', '2024-03-30 17:00:00.000', 'dakwas \r\n', 'operator2', '', 'Deleted', 0, 'daily', NULL, NULL, '2024-03-04 03:23:46.604', '2024-03-04 03:32:18.140', NULL, NULL, '2024-03-04_10-23-46_blob', NULL, NULL, '2024-03-04 03:32:18.153', 'operator', NULL, NULL, NULL, NULL, NULL),
('cltcdonbd000211e5m80bioxs', 'Single', 'taskk op', 'Important', '2024-02-23 17:00:00.000', '2024-03-30 17:00:00.000', 'dakwas \r\n', 'operator2', '', 'Deleted', 0, 'daily', NULL, NULL, '2024-03-04 03:25:12.841', '2024-03-04 03:32:11.078', NULL, NULL, '2024-03-04_10-25-12_blob', NULL, NULL, '2024-03-04 03:32:11.092', 'operator', NULL, NULL, NULL, NULL, NULL),
('cltcdpeej000311e5s4somice', 'Single', 'taskk op', 'Important', '2024-02-23 17:00:00.000', '2024-03-30 17:00:00.000', 'dakwas \r\n', 'operator2', '', 'Deleted', 0, 'daily', NULL, NULL, '2024-03-04 03:25:47.948', '2024-03-04 03:32:03.897', NULL, NULL, '2024-03-04_10-25-47_blob', NULL, NULL, '2024-03-04 03:32:03.923', 'operator', NULL, NULL, NULL, NULL, NULL),
('cltcdy4qn000411e596xft6dz', 'Single', 'taskk op', 'Important', '2024-02-23 17:00:00.000', '2024-03-30 17:00:00.000', 'dakwas \r\n', 'operator2', '', 'Deleted', 0, 'daily', NULL, NULL, '2024-03-04 03:32:35.323', '2024-03-04 03:33:30.257', NULL, NULL, '2024-03-04_10-32-35_blob', NULL, NULL, '2024-03-04 03:33:30.319', 'operator', NULL, NULL, NULL, NULL, NULL),
('cltcdzh86000511e5iu6qnvua', 'Single', 'taskk op', 'Important', '2024-02-23 17:00:00.000', '2024-03-30 17:00:00.000', 'dakwas \r\n', 'operator2', '', 'Deleted', 0, 'daily', NULL, NULL, '2024-03-04 03:33:38.167', '2024-03-04 03:34:03.825', NULL, NULL, '2024-03-04_10-33-38_blob', NULL, NULL, '2024-03-04 03:34:03.836', 'operator', NULL, NULL, NULL, NULL, NULL),
('cltce00zy000611e5145jw9yd', 'Single', 'taskk op', 'Important', '2024-02-23 17:00:00.000', '2024-03-30 17:00:00.000', 'dakwas \r\n', 'operator2', '', 'Open', 0, 'daily', NULL, NULL, '2024-03-04 03:34:03.790', NULL, NULL, NULL, '2024-03-04_10-34-03_blob', NULL, NULL, '2024-03-04 03:34:03.790', 'operator', NULL, NULL, NULL, NULL, NULL),
('cltcg1own000013kumb7dufsx', 'Single', 'task anyar', 'Normal', '2024-03-06 17:00:00.000', '2024-03-30 17:00:00.000', 'skjdkajsd \r\n', 'Titin Ruyati', 'Jajang Maulana', 'Deleted', 0, 'weekly', '2024-03-04 04:31:31.409', NULL, '2024-03-04 04:31:20.657', '2024-03-04 05:10:29.734', NULL, NULL, '2024-03-04_11-31-20_LAPORAN APLIKASI RENTAL MOBIL 2 1.pdf', NULL, NULL, '2024-03-04 05:10:29.861', 'manager', NULL, NULL, 'Jajang Maulana', '', ''),
('cltcgz9b3000113kuh08qtz6w', 'Single', 'task anyar', 'Normal', '2024-03-06 17:00:00.000', '2024-03-30 17:00:00.000', 'skjdkajsd \r\n', 'Titin Ruyati', 'Jajang Maulana', 'Open', 0, 'weekly', NULL, NULL, '2024-03-04 04:57:26.750', NULL, NULL, NULL, '2024-03-04_11-57-26_blob', NULL, NULL, '2024-03-04 04:57:26.750', 'manager', NULL, NULL, NULL, NULL, NULL),
('cltcit63o000014egoyda9rky', 'Single', 'new task', 'Normal', '2024-03-08 17:00:00.000', '2024-03-30 17:00:00.000', 'desc \r\n', 'Titin Ruyati', 'Jajang Maulana', 'Open', 0, 'daily', '2024-03-04 05:48:57.391', NULL, '2024-03-04 05:48:41.891', NULL, NULL, NULL, '2024-03-04_12-48-41_2024-03-04_11-31-20_LAPORAN APLIKASI RENTAL MOBIL 2 1-1.pdf', NULL, NULL, '2024-03-04 05:48:57.429', 'manager', NULL, NULL, 'Jajang Maulana', '', ''),
('cltcitn8i000114egyiejtimu', 'Single', 'new task', 'Normal', '2024-03-08 17:00:00.000', '2024-03-30 17:00:00.000', 'desc \r\n', 'Titin Ruyati', 'Jajang Maulana', 'Open', 0, 'daily', NULL, NULL, '2024-03-04 05:49:04.099', NULL, NULL, NULL, '2024-03-04_12-49-04_blob', NULL, NULL, '2024-03-04 05:49:04.099', 'manager', NULL, NULL, NULL, NULL, NULL),
('cltclmbwt0000g3zrmceifhhm', 'Single', 'Organic Food', 'Important', '2024-03-05 17:00:00.000', '2024-03-06 17:00:00.000', 'Tolong pake ati ampela \r\n', 'Lilis Surtiani', 'Titin Ruyati', 'Open', 0, 'daily', '2024-03-04 07:08:44.207', NULL, '2024-03-04 07:07:21.668', NULL, NULL, NULL, '2024-03-04_14-07-21_2024-03-01.png', NULL, NULL, '2024-03-04 07:08:46.404', 'supervisor', NULL, NULL, 'Titin Ruyati', '', ''),
('cltcmbl5l0001g3zrm2xwgsqn', 'Multi', 'Sayur wortel', 'High', '2024-02-29 17:00:00.000', '2024-03-01 17:00:00.000', 'hellow \r\n', 'Jajang Maulana', 'Darman Sukmana', 'Close', 0, 'monthly', '2024-03-04 07:27:27.462', NULL, '2024-03-04 07:27:00.057', NULL, NULL, NULL, '2024-03-04_14-27-00_2023-09-27.png', NULL, NULL, '2024-03-04 07:27:28.183', 'operator', NULL, NULL, 'Darman Sukmana', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
