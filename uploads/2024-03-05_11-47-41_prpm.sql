-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 04, 2024 at 04:41 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `prpm`
--

-- --------------------------------------------------------

--
-- Table structure for table `custs`
--

CREATE TABLE `custs` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `type` varchar(191) NOT NULL,
  `contact` varchar(191) DEFAULT NULL,
  `contact_phone` varchar(191) DEFAULT NULL,
  `email` varchar(191) DEFAULT NULL,
  `npwp` varchar(191) DEFAULT NULL,
  `address` varchar(191) DEFAULT NULL,
  `fincontact` varchar(191) DEFAULT NULL,
  `fincontact_phone` varchar(191) DEFAULT NULL,
  `img_logo` varchar(191) DEFAULT NULL,
  `img_akta` varchar(191) DEFAULT NULL,
  `img_nib` varchar(191) DEFAULT NULL,
  `img_npwp` varchar(191) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  `createdAt` datetime(3) DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `custs`
--

INSERT INTO `custs` (`id`, `name`, `type`, `contact`, `contact_phone`, `email`, `npwp`, `address`, `fincontact`, `fincontact_phone`, `img_logo`, `img_akta`, `img_nib`, `img_npwp`, `is_deleted`, `createdAt`, `updatedAt`) VALUES
('clt8mu77300006mtewiy7v1i1', 'Nur Cahyanto', 'AGENCY', 'Nur Cahyanto', '+6285158693933', 'nur.razdan@gmail.com', 'undefined', 'Jalan Raya Karangreja', 'undefined', 'undefined', NULL, NULL, NULL, NULL, 1, '2024-03-01 12:30:23.727', '2024-03-02 07:12:29.172'),
('clt8p9uza00003ho1kpf0tpco', 'Nur Cahyanto', 'AGENCY', 'Nur Cahyanto', '+6285158693933', 'nur.razdan@gmail.com', '-', 'Jalan Raya Karangreja', '-', '-', NULL, NULL, NULL, NULL, 0, '2024-03-01 13:38:33.622', '2024-03-01 13:38:33.622'),
('clt9qwrgw00009nlvow67r1hl', 'palagann', 'AGENCY', 'palagan', '0098990808', 'palagan@gmail.com', '98.089.808.0-980.809', 'bandung', '-', '-', NULL, NULL, NULL, NULL, 0, '2024-03-02 07:12:07.951', '2024-03-02 07:12:22.900');

-- --------------------------------------------------------

--
-- Table structure for table `listproduk`
--

CREATE TABLE `listproduk` (
  `id` varchar(191) NOT NULL,
  `idOrder` varchar(191) DEFAULT NULL,
  `produk` varchar(191) DEFAULT NULL,
  `rate` varchar(191) DEFAULT NULL,
  `kategori` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `listproduk`
--

INSERT INTO `listproduk` (`id`, `idOrder`, `produk`, `rate`, `kategori`) VALUES
('clt8n3b4v000a6mteufcpgjs3', 'clt8n3b4i00096mteft5d201v', 'artikel', '300000', 'artikel'),
('clt8nc3sk000f6mteomo5s82f', 'clt8nc3s9000e6mteldileqcs', 'artikel', '300000', 'artikel'),
('clt8ncta5000k6mte7eeycgih', 'clt8nct9y000j6mtewl3w7060', 'artikel', '300000', 'artikel'),
('clt8nd9ht000p6mteh6vbfqup', 'clt8nd9hj000o6mteh17ohwq1', 'artikel', '300000', 'artikel'),
('clt8njs4g0002i6ihq4nufu6q', 'clt8njs430001i6ihkramk54i', 'artikel', '40000', 'artikel'),
('clt8nkn9h0007i6ih4k2fs3lh', 'clt8nkn8q0006i6ihkmk36105', 'artikel', '40000', 'artikel'),
('clt8nl8yp000ci6ih4fra6dea', 'clt8nl8ye000bi6ihsekdbb9u', 'artikel', '40000', 'artikel'),
('clt8nlsht000hi6ihec66pvpe', 'clt8nlshh000gi6ihop5xrq87', 'artikel', '40000', 'artikel'),
('clt8nvwmm000mi6ihc0d4ybhe', 'clt8nvwmb000li6ihlxwoj5qy', 'artikel', '300000', 'artikel'),
('clt8o38j3000ui6ihz6uc4ma3', 'clt8o38iz000ti6ihboqebycs', 'artikel', '300000', 'artikel'),
('clt8o6aiq000zi6ih95k88x92', 'clt8o6aii000yi6ihgrusximn', 'artikel', '300000', 'artikel'),
('clt8of7or0014i6ihdzlzq9lt', 'clt8of7ok0013i6ih5hshvpxb', 'artikel', '300000', 'artikel'),
('clt9i525i0002nglbdhqmtgq3', 'clt9i52570001nglbo12l0m1o', 'artikel', '300000', 'artikel'),
('clt9iisch0002j0ncqvavfsir', 'clt9iisca0001j0nci5skohkf', 'artikel', '300000', 'artikel'),
('clt9iisch0003j0nc8lxsbzer', 'clt9iisca0001j0nci5skohkf', 'sdasdads', '34545', 'other content'),
('clt9jqfry0002pqfsfw4stum0', 'clt9jqfrt0001pqfssbym7n9u', 'artikel', '300000', 'artikel');

-- --------------------------------------------------------

--
-- Table structure for table `mitra`
--

CREATE TABLE `mitra` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  `created_At` datetime(3) DEFAULT current_timestamp(3),
  `updated_At` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `mitra`
--

INSERT INTO `mitra` (`id`, `name`, `status`, `is_deleted`, `created_At`, `updated_At`) VALUES
('clt8nehfn000s6mte3k3zijeh', 'mitra 1', 1, NULL, '2024-03-01 12:46:10.115', '2024-03-01 14:24:11.573'),
('clt8nel9j000t6mtewtsxrsil', 'mitra 2', 1, NULL, '2024-03-01 12:46:15.079', '2024-03-01 14:24:05.824'),
('clt8nep5p000u6mtepuwp8w5c', 'mitra 3', 1, NULL, '2024-03-01 12:46:20.126', '2024-03-01 14:24:00.303'),
('clt8qhtu60000g6wfyxchmwag', 'mitra 5', 1, NULL, '2024-03-01 14:12:45.007', '2024-03-01 14:12:45.007'),
('clt8qiq3x0001g6wf1m1438as', 'Mitra 7', 1, NULL, '2024-03-01 14:13:26.829', '2024-03-01 14:22:37.512'),
('clt9r4r9000089nlvsj5yzyac', 'mitra bandung', 1, NULL, '2024-03-02 07:18:20.916', '2024-03-02 07:18:20.916');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` varchar(191) NOT NULL,
  `id_cust` varchar(191) NOT NULL,
  `id_user` varchar(191) NOT NULL,
  `Sales_type` varchar(191) DEFAULT NULL,
  `camp_name` varchar(191) DEFAULT NULL,
  `order_no` int(11) DEFAULT NULL,
  `order_date` datetime(3) DEFAULT NULL,
  `period_start` datetime(3) DEFAULT NULL,
  `period_end` datetime(3) DEFAULT NULL,
  `pay_type` varchar(191) DEFAULT NULL,
  `no_mo` varchar(191) DEFAULT NULL,
  `media_tayang` varchar(191) DEFAULT NULL,
  `rate_type` varchar(191) DEFAULT NULL,
  `sales_approve` tinyint(1) DEFAULT NULL,
  `manager_approve` tinyint(1) DEFAULT NULL,
  `pic_approve` tinyint(1) DEFAULT NULL,
  `request_by` varchar(191) DEFAULT NULL,
  `created_At` datetime(3) DEFAULT current_timestamp(3),
  `updated_At` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`id`, `id_cust`, `id_user`, `Sales_type`, `camp_name`, `order_no`, `order_date`, `period_start`, `period_end`, `pay_type`, `no_mo`, `media_tayang`, `rate_type`, `sales_approve`, `manager_approve`, `pic_approve`, `request_by`, `created_At`, `updated_At`) VALUES
('clt8n3b4i00096mteft5d201v', 'clt8mu77300006mtewiy7v1i1', 'clt8n1kzs00076mte04reswls', 'Sales', 'contoh', 0, '2024-01-29 17:00:00.000', '2024-02-29 17:00:00.000', '2024-03-12 17:00:00.000', 'semi', 'MO - 1', 'PRMN', NULL, 0, 0, 0, 'sales', '2024-03-01 12:37:28.722', '2024-03-02 03:46:59.854'),
('clt8nc3s9000e6mteldileqcs', 'clt8mu77300006mtewiy7v1i1', 'clt8n1kzs00076mte04reswls', 'Sales', 'cash', 1, '2024-02-29 17:00:00.000', '2024-02-29 17:00:00.000', '2024-02-29 17:00:00.000', 'barter', 'MO - 2', 'PRMN', NULL, 0, 0, 0, 'sales', '2024-03-01 12:44:19.113', '2024-03-01 12:44:19.113'),
('clt8nct9y000j6mtewl3w7060', 'clt8mu77300006mtewiy7v1i1', 'clt8n1kzs00076mte04reswls', NULL, NULL, 2, '2024-02-29 17:00:00.000', '2024-02-29 17:00:00.000', '2024-02-29 17:00:00.000', 'kredit', 'MO - 3', 'PRMN', NULL, 0, 0, 0, 'sales', '2024-03-01 12:44:52.150', '2024-03-01 12:44:52.150'),
('clt8nd9hj000o6mteh17ohwq1', 'clt8mu77300006mtewiy7v1i1', 'clt8n1kzs00076mte04reswls', NULL, NULL, 3, '2024-02-29 17:00:00.000', '2024-02-29 17:00:00.000', '2024-02-29 17:00:00.000', 'termin', 'MO - 4', 'PRMN', NULL, 0, 0, 0, 'sales', '2024-03-01 12:45:13.159', '2024-03-01 12:45:13.159'),
('clt8njs430001i6ihkramk54i', 'clt8mu77300006mtewiy7v1i1', 'clt8n1kzs00076mte04reswls', NULL, NULL, 4, '2024-02-29 17:00:00.000', '2024-02-29 17:00:00.000', '2024-03-12 17:00:00.000', 'semi', 'MO - 5', 'Mitra', NULL, 0, 0, 0, 'sales', '2024-03-01 12:50:17.235', '2024-03-01 12:50:17.235'),
('clt8nkn8q0006i6ihkmk36105', 'clt8mu77300006mtewiy7v1i1', 'clt8n1kzs00076mte04reswls', NULL, NULL, 5, '2024-02-29 17:00:00.000', '2024-02-29 17:00:00.000', '2024-03-13 17:00:00.000', 'cash', 'MO - 6', 'Mitra', NULL, 1, 0, 0, 'sales', '2024-03-01 12:50:57.577', '2024-03-01 12:52:24.515'),
('clt8nl8ye000bi6ihsekdbb9u', 'clt8mu77300006mtewiy7v1i1', 'clt8n1kzs00076mte04reswls', NULL, NULL, 6, '2024-02-29 17:00:00.000', '2024-02-29 17:00:00.000', '2024-02-29 17:00:00.000', 'kredit', 'MO - 7', 'Mitra', NULL, 1, 0, 0, 'sales', '2024-03-01 12:51:25.718', '2024-03-01 12:52:13.416'),
('clt8nlshh000gi6ihop5xrq87', 'clt8mu77300006mtewiy7v1i1', 'clt8n1kzs00076mte04reswls', NULL, NULL, 7, '2024-02-29 17:00:00.000', '2024-02-29 17:00:00.000', '2024-02-29 17:00:00.000', 'termin', 'MO - 8', 'Mitra', NULL, 1, 0, 0, 'sales', '2024-03-01 12:51:51.029', '2024-03-01 12:52:02.197'),
('clt8nvwmb000li6ihlxwoj5qy', 'clt8mu77300006mtewiy7v1i1', 'clt8n1kzs00076mte04reswls', 'Sales', 'Diskon contoh', 8, '2024-02-29 17:00:00.000', '2024-02-29 17:00:00.000', '2024-03-18 17:00:00.000', 'cash', 'MO - 9', 'PRMN', NULL, 1, 0, 0, 'sales', '2024-03-01 12:59:42.947', '2024-03-01 13:36:10.017'),
('clt8o38iz000ti6ihboqebycs', 'clt8mu77300006mtewiy7v1i1', 'clt8o14c0000ri6iheiekoumh', 'Sales', 'contoh', 9, '2024-02-29 17:00:00.000', '2024-02-29 17:00:00.000', '2024-03-05 17:00:00.000', 'cash', 'MO - 10', 'PRMN', NULL, 0, 0, 0, 'manager', '2024-03-01 13:05:24.971', '2024-03-01 13:05:24.971'),
('clt8o6aii000yi6ihgrusximn', 'clt8mu77300006mtewiy7v1i1', 'clt8o14c0000ri6iheiekoumh', 'Sales', 'contoh war', 10, '2024-02-29 17:00:00.000', '2024-02-29 17:00:00.000', '2024-03-06 17:00:00.000', 'barter', 'MO - 11', 'PRMN', NULL, 0, 0, 0, 'manager', '2024-03-01 13:07:47.515', '2024-03-01 13:07:47.515'),
('clt8of7ok0013i6ih5hshvpxb', 'clt8mu77300006mtewiy7v1i1', 'clt8o14c0000ri6iheiekoumh', 'Sales', NULL, 11, '2024-02-29 17:00:00.000', '2024-02-29 17:00:00.000', '2024-03-11 17:00:00.000', 'semi', 'MO - 12', 'PRMN', NULL, 1, 1, 0, 'manager', '2024-03-01 13:14:43.749', '2024-03-01 13:20:09.395'),
('clt9i52570001nglbo12l0m1o', 'clt8p9uza00003ho1kpf0tpco', 'clt8o14c0000ri6iheiekoumh', 'Sales', 'Promo coba', 12, '2024-03-01 17:00:00.000', '2024-03-01 17:00:00.000', '2024-03-07 17:00:00.000', 'cash', 'MO - 13', 'PRMN', NULL, 0, 0, 0, 'manager', '2024-03-02 03:06:38.490', '2024-03-02 03:06:38.490'),
('clt9iisca0001j0nci5skohkf', 'clt8p9uza00003ho1kpf0tpco', 'clt8n1kzs00076mte04reswls', 'Sales', 'contoh', 13, '2024-03-01 17:00:00.000', '2024-03-01 17:00:00.000', '2024-03-06 17:00:00.000', 'cash', 'MO - 14', 'PRMN', NULL, 0, 0, 0, 'sales', '2024-03-02 03:17:18.970', '2024-03-02 03:17:18.970'),
('clt9jqfrt0001pqfssbym7n9u', 'clt8p9uza00003ho1kpf0tpco', 'clt8o14c0000ri6iheiekoumh', 'Sales', NULL, 14, '2024-03-01 17:00:00.000', '2024-03-01 17:00:00.000', '2024-03-06 17:00:00.000', 'cash', 'MO - 15', 'PRMN', NULL, 0, 0, 0, 'manager', '2024-03-02 03:51:15.546', '2024-03-02 03:51:15.546');

-- --------------------------------------------------------

--
-- Table structure for table `ordermitra`
--

CREATE TABLE `ordermitra` (
  `idOrder` varchar(191) NOT NULL,
  `idMitra` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ordermitra`
--

INSERT INTO `ordermitra` (`idOrder`, `idMitra`) VALUES
('clt8njs430001i6ihkramk54i', 'clt8nehfn000s6mte3k3zijeh'),
('clt8nkn8q0006i6ihkmk36105', 'clt8nehfn000s6mte3k3zijeh'),
('clt8nl8ye000bi6ihsekdbb9u', 'clt8nehfn000s6mte3k3zijeh'),
('clt8nlshh000gi6ihop5xrq87', 'clt8nehfn000s6mte3k3zijeh'),
('clt8njs430001i6ihkramk54i', 'clt8nel9j000t6mtewtsxrsil'),
('clt8nkn8q0006i6ihkmk36105', 'clt8nel9j000t6mtewtsxrsil'),
('clt8nl8ye000bi6ihsekdbb9u', 'clt8nel9j000t6mtewtsxrsil'),
('clt8nlshh000gi6ihop5xrq87', 'clt8nel9j000t6mtewtsxrsil'),
('clt8njs430001i6ihkramk54i', 'clt8nep5p000u6mtepuwp8w5c'),
('clt8nkn8q0006i6ihkmk36105', 'clt8nep5p000u6mtepuwp8w5c'),
('clt8nl8ye000bi6ihsekdbb9u', 'clt8nep5p000u6mtepuwp8w5c'),
('clt8nlshh000gi6ihop5xrq87', 'clt8nep5p000u6mtepuwp8w5c');

-- --------------------------------------------------------

--
-- Table structure for table `ordertayangiklan`
--

CREATE TABLE `ordertayangiklan` (
  `id` varchar(191) NOT NULL,
  `idOrder` varchar(191) NOT NULL,
  `product` varchar(191) DEFAULT NULL,
  `sub` varchar(191) DEFAULT NULL,
  `oti` varchar(191) DEFAULT NULL,
  `tayang` tinyint(1) DEFAULT NULL,
  `bukti_tayang` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) DEFAULT NULL,
  `orderDate` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ordertayangiklan`
--

INSERT INTO `ordertayangiklan` (`id`, `idOrder`, `product`, `sub`, `oti`, `tayang`, `bukti_tayang`, `createdAt`, `updatedAt`, `orderDate`) VALUES
('clt8n3b58000c6mteez6n7p3g', 'clt8n3b4i00096mteft5d201v', 'artikel', 'artikel', '001/MS03/291/OTI-CRW/III/2024', 0, NULL, '2024-03-01 12:37:28.748', '2024-03-02 03:52:32.358', '2024-03-01 17:00:00.000'),
('clt8nc3st000h6mte7vxsobsw', 'clt8nc3s9000e6mteldileqcs', 'artikel', 'artikel', '002/MS03/291/OTI-CRW/III/2024', 0, NULL, '2024-03-01 12:44:19.133', '2024-03-02 03:52:32.358', '2024-03-01 17:00:00.000'),
('clt8nctab000m6mte6ehv7qor', 'clt8nct9y000j6mtewl3w7060', 'artikel', 'artikel', '003/MS03/291/OTI-CRW/III/2024', 0, NULL, '2024-03-01 12:44:52.164', '2024-03-02 03:52:32.358', '2024-03-01 17:00:00.000'),
('clt8nd9hz000r6mtehtiqz56i', 'clt8nd9hj000o6mteh17ohwq1', 'artikel', 'artikel', '004/MS03/291/OTI-CRW/III/2024', 0, NULL, '2024-03-01 12:45:13.175', '2024-03-02 03:52:32.358', '2024-03-01 17:00:00.000'),
('clt8njs4m0004i6ihz5v6kixh', 'clt8njs430001i6ihkramk54i', 'artikel', 'artikel', '005/MS03/291/OTI-CRW/III/2024', 0, NULL, '2024-03-01 12:50:17.255', '2024-03-02 03:52:32.358', '2024-03-01 17:00:00.000'),
('clt8nkn9t0009i6ihzajuua8f', 'clt8nkn8q0006i6ihkmk36105', 'artikel', 'artikel', '006/MS03/291/OTI-CRW/III/2024', 0, NULL, '2024-03-01 12:50:57.617', '2024-03-02 03:52:32.358', '2024-03-01 17:00:00.000'),
('clt8nl8yu000ei6ihodk9mj4r', 'clt8nl8ye000bi6ihsekdbb9u', 'artikel', 'artikel', '007/MS03/291/OTI-CRW/III/2024', 0, NULL, '2024-03-01 12:51:25.734', '2024-03-02 03:52:32.358', '2024-03-01 17:00:00.000'),
('clt8nlshz000ji6ihhe07lh5y', 'clt8nlshh000gi6ihop5xrq87', 'artikel', 'artikel', '008/MS03/291/OTI-CRW/III/2024', 0, NULL, '2024-03-01 12:51:51.047', '2024-03-02 03:52:32.358', '2024-03-01 17:00:00.000'),
('clt8nvwmt000oi6ihhmqlvl65', 'clt8nvwmb000li6ihlxwoj5qy', 'artikel', 'artikel', '009/MS03/291/OTI-CRW/III/2024', 0, NULL, '2024-03-01 12:59:42.966', '2024-03-02 03:52:32.358', '2024-03-01 17:00:00.000'),
('clt8o38j8000wi6ih7s7x28fu', 'clt8o38iz000ti6ihboqebycs', 'artikel', 'artikel', '010/MS03/291/OTI-CRW/III/2024', 0, NULL, '2024-03-01 13:05:24.980', '2024-03-02 03:52:32.358', '2024-03-01 17:00:00.000'),
('clt8o6aiw0011i6ihwz201v2h', 'clt8o6aii000yi6ihgrusximn', 'artikel', 'artikel', '011/MS03/291/OTI-CRW/III/2024', 1, '2024-03-01_20-26-01_WhatsApp Image 2024-02-29 at 09.03.15_1cdbef3e.jpg', '2024-03-01 13:07:47.529', '2024-03-02 03:52:32.358', '2024-03-01 17:00:00.000'),
('clt8of7ox0016i6ih3otwj14f', 'clt8of7ok0013i6ih5hshvpxb', 'artikel', 'artikel', '012/MS03/291/OTI-CRW/III/2024', 1, '2024-03-01_20-25-46_WhatsApp Image 2024-02-29 at 09.03.15_1cdbef3e.jpg', '2024-03-01 13:14:43.761', '2024-03-02 03:52:32.358', '2024-03-01 17:00:00.000'),
('clt9i525l0004nglbcyq5uxla', 'clt9i52570001nglbo12l0m1o', 'artikel', 'artikel', '013/MS03/291/OTI-CRW/III/2024', 0, NULL, '2024-03-02 03:06:38.506', '2024-03-02 03:52:32.358', '2024-03-01 17:00:00.000'),
('clt9iiscn0005j0nce5k7be5j', 'clt9iisca0001j0nci5skohkf', 'artikel', 'artikel', '014/MS03/291/OTI-CRW/III/2024', 0, NULL, '2024-03-02 03:17:18.984', '2024-03-02 03:52:32.358', '2024-03-01 17:00:00.000'),
('clt9iiscp0007j0nceb3g9vuz', 'clt9iisca0001j0nci5skohkf', 'other content', 'sdasdads', '015/MS03/291/OTI-CRW/III/2024', 0, NULL, '2024-03-02 03:17:18.985', '2024-03-02 03:52:32.358', '2024-03-01 17:00:00.000'),
('clt9jqfs20004pqfsfxt2ou88', 'clt9jqfrt0001pqfssbym7n9u', 'artikel', 'artikel', '016/MS03/291/OTI-CRW/III/2024', 0, NULL, '2024-03-02 03:51:15.554', '2024-03-02 03:51:15.554', '2024-03-01 17:00:00.000');

-- --------------------------------------------------------

--
-- Table structure for table `paybarter`
--

CREATE TABLE `paybarter` (
  `idOrder` varchar(191) NOT NULL,
  `nilai` int(11) NOT NULL,
  `barang` varchar(191) DEFAULT NULL,
  `tempo` datetime(3) DEFAULT NULL,
  `diskon` double DEFAULT NULL,
  `cash_back` double DEFAULT NULL,
  `intensive` double DEFAULT NULL,
  `finalPrice` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `paybarter`
--

INSERT INTO `paybarter` (`idOrder`, `nilai`, `barang`, `tempo`, `diskon`, `cash_back`, `intensive`, `finalPrice`) VALUES
('clt8nc3s9000e6mteldileqcs', 300000, '', '2024-02-29 17:00:00.000', 0, NULL, NULL, 300000),
('clt8o6aii000yi6ihgrusximn', 300000, '', '2024-02-29 17:00:00.000', 0, NULL, NULL, 2100000);

-- --------------------------------------------------------

--
-- Table structure for table `paycash`
--

CREATE TABLE `paycash` (
  `idOrder` varchar(191) NOT NULL,
  `total` int(11) NOT NULL,
  `tempo` datetime(3) NOT NULL,
  `diskon` double DEFAULT NULL,
  `cash_back` double DEFAULT NULL,
  `intensive` double DEFAULT NULL,
  `finalPrice` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `paycash`
--

INSERT INTO `paycash` (`idOrder`, `total`, `tempo`, `diskon`, `cash_back`, `intensive`, `finalPrice`) VALUES
('clt8nkn8q0006i6ihkmk36105', 40000, '2024-02-29 17:00:00.000', 0, NULL, NULL, 1680000),
('clt8nvwmb000li6ihlxwoj5qy', 300000, '2024-02-29 17:00:00.000', 0, NULL, NULL, 5700000),
('clt8o38iz000ti6ihboqebycs', 300000, '2024-02-29 17:00:00.000', 0, NULL, NULL, 1800000),
('clt9i52570001nglbo12l0m1o', 300000, '2024-03-01 17:00:00.000', 4.38, NULL, NULL, 2008020),
('clt9iisca0001j0nci5skohkf', 334545, '2024-03-01 17:00:00.000', 0, NULL, NULL, 2007270),
('clt9jqfrt0001pqfssbym7n9u', 300000, '2024-03-01 17:00:00.000', 0, NULL, NULL, 1800000);

-- --------------------------------------------------------

--
-- Table structure for table `paydeposit`
--

CREATE TABLE `paydeposit` (
  `idOrder` varchar(191) NOT NULL,
  `totalDeposit` int(11) NOT NULL,
  `minDeposit` int(11) NOT NULL,
  `status` varchar(191) NOT NULL,
  `cash_back` double DEFAULT NULL,
  `intensive` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `paykredit`
--

CREATE TABLE `paykredit` (
  `idOrder` varchar(191) NOT NULL,
  `nilaiKredit` int(11) NOT NULL,
  `tempo` datetime(3) NOT NULL,
  `diskon` double DEFAULT NULL,
  `finalPrice` int(11) NOT NULL,
  `cash_back` double DEFAULT NULL,
  `intensive` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `paykredit`
--

INSERT INTO `paykredit` (`idOrder`, `nilaiKredit`, `tempo`, `diskon`, `finalPrice`, `cash_back`, `intensive`) VALUES
('clt8nct9y000j6mtewl3w7060', 300000, '2024-02-29 17:00:00.000', 0, 300000, NULL, NULL),
('clt8nl8ye000bi6ihsekdbb9u', 40000, '2024-02-29 17:00:00.000', 0, 120000, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `paysemibarter`
--

CREATE TABLE `paysemibarter` (
  `idOrder` varchar(191) NOT NULL,
  `nilaiBarter` int(11) NOT NULL,
  `tempoBarter` datetime(3) NOT NULL,
  `nilaiCash` int(11) NOT NULL,
  `tempoCash` datetime(3) NOT NULL,
  `itemBarang` varchar(191) NOT NULL,
  `totalRate` int(11) NOT NULL,
  `finalPrice` int(11) NOT NULL,
  `diskon` double DEFAULT NULL,
  `cash_back` double DEFAULT NULL,
  `intensive` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `paysemibarter`
--

INSERT INTO `paysemibarter` (`idOrder`, `nilaiBarter`, `tempoBarter`, `nilaiCash`, `tempoCash`, `itemBarang`, `totalRate`, `finalPrice`, `diskon`, `cash_back`, `intensive`) VALUES
('clt8n3b4i00096mteft5d201v', 257000, '2024-02-29 17:00:00.000', 43000, '2024-02-29 17:00:00.000', '', 300000, 3900000, 0, NULL, NULL),
('clt8njs430001i6ihkramk54i', 40000, '2024-02-29 17:00:00.000', 0, '2024-02-29 17:00:00.000', '', 40000, 1560000, 0, NULL, NULL),
('clt8of7ok0013i6ih5hshvpxb', -3299996, '2024-02-29 17:00:00.000', 3599996, '2024-02-29 17:00:00.000', '', 300000, 3600000, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `paytermin`
--

CREATE TABLE `paytermin` (
  `idOrder` varchar(191) NOT NULL,
  `termin_1` int(11) NOT NULL,
  `tempo_1` datetime(3) NOT NULL,
  `termin_2` int(11) NOT NULL,
  `tempo_2` datetime(3) NOT NULL,
  `termin_3` int(11) NOT NULL,
  `tempo_3` datetime(3) NOT NULL,
  `diskon` double DEFAULT NULL,
  `finalPrice` int(11) NOT NULL,
  `cash_back` double DEFAULT NULL,
  `intensive` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `paytermin`
--

INSERT INTO `paytermin` (`idOrder`, `termin_1`, `tempo_1`, `termin_2`, `tempo_2`, `termin_3`, `tempo_3`, `diskon`, `finalPrice`, `cash_back`, `intensive`) VALUES
('clt8nd9hj000o6mteh17ohwq1', 120000, '2024-02-29 17:00:00.000', 90000, '2024-02-29 17:00:00.000', 90000, '2024-02-29 17:00:00.000', 0, 300000, NULL, NULL),
('clt8nlshh000gi6ihop5xrq87', 48000, '2024-02-29 17:00:00.000', 36000, '2024-02-29 17:00:00.000', 36000, '2024-02-29 17:00:00.000', 0, 120000, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `rate_article`
--

CREATE TABLE `rate_article` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `prmn` int(11) DEFAULT NULL,
  `mitra` int(11) DEFAULT NULL,
  `is_custom_price_prmn` tinyint(1) DEFAULT NULL,
  `is_custom_price_mitra` tinyint(1) DEFAULT NULL,
  `note` varchar(191) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  `createdAt` datetime(3) DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rate_article`
--

INSERT INTO `rate_article` (`id`, `name`, `prmn`, `mitra`, `is_custom_price_prmn`, `is_custom_price_mitra`, `note`, `is_deleted`, `createdAt`, `updatedAt`) VALUES
('clt8mzldh00056mter1yxmnzx', 'artikel', 300000, 40000, 0, 0, NULL, NULL, '2024-03-01 12:34:35.381', '2024-03-01 12:34:35.381'),
('clt9qyagj00019nlvsg3a9xyo', 'artikel wasda', 300000, 400000, 0, 0, '-', 1, '2024-03-02 07:13:19.219', '2024-03-02 07:13:42.524'),
('clt9qznmp00029nlvm8evgla2', 'contoh cutom', NULL, NULL, 1, 1, NULL, NULL, '2024-03-02 07:14:22.945', '2024-03-02 07:14:22.945');

-- --------------------------------------------------------

--
-- Table structure for table `rate_cpd`
--

CREATE TABLE `rate_cpd` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `type` varchar(191) DEFAULT NULL,
  `size` varchar(191) DEFAULT NULL,
  `rate_home` int(11) DEFAULT NULL,
  `rate_detail` int(11) DEFAULT NULL,
  `rate_section` int(11) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  `createdAt` datetime(3) DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rate_cpd`
--

INSERT INTO `rate_cpd` (`id`, `name`, `type`, `size`, `rate_home`, `rate_detail`, `rate_section`, `is_deleted`, `createdAt`, `updatedAt`) VALUES
('clt9r35ch00069nlv19hmnwmf', 'display1', 'Desktop', '300 x 300', 30000, 340000, 23000, NULL, '2024-03-02 07:17:05.869', '2024-03-02 07:17:05.869');

-- --------------------------------------------------------

--
-- Table structure for table `rate_cpm`
--

CREATE TABLE `rate_cpm` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `type` varchar(191) DEFAULT NULL,
  `size` varchar(191) DEFAULT NULL,
  `rate` int(11) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  `is_custom_price` tinyint(1) DEFAULT NULL,
  `createdAt` datetime(3) DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rate_cpm`
--

INSERT INTO `rate_cpm` (`id`, `name`, `type`, `size`, `rate`, `is_deleted`, `is_custom_price`, `createdAt`, `updatedAt`) VALUES
('clt9r40n700079nlv6wuczdrv', 'ads cpm', 'Desktop', '300 x 200', 21000, NULL, 0, '2024-03-02 07:17:46.435', '2024-03-02 07:18:01.915');

-- --------------------------------------------------------

--
-- Table structure for table `rate_other_content`
--

CREATE TABLE `rate_other_content` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `rate` int(11) DEFAULT NULL,
  `note` varchar(191) DEFAULT NULL,
  `is_custom_price` tinyint(1) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  `createdAt` datetime(3) DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rate_other_content`
--

INSERT INTO `rate_other_content` (`id`, `name`, `rate`, `note`, `is_custom_price`, `is_deleted`, `createdAt`, `updatedAt`) VALUES
('clt8ple3c00013ho1dxdgjohn', 'sdasdads', 34545, NULL, 0, NULL, '2024-03-01 13:47:31.609', '2024-03-01 13:47:31.609'),
('clt8pmfgl00023ho1ih2qff3g', 'sdad', 45345, NULL, 0, NULL, '2024-03-01 13:48:20.038', '2024-03-01 13:48:20.038'),
('clt9r22le00059nlvsllf9r3l', 'produk  1', 56000, NULL, 0, NULL, '2024-03-02 07:16:15.650', '2024-03-02 07:16:15.650');

-- --------------------------------------------------------

--
-- Table structure for table `rate_sosmed`
--

CREATE TABLE `rate_sosmed` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `instagram` int(11) DEFAULT NULL,
  `facebook` int(11) DEFAULT NULL,
  `rate` int(11) DEFAULT NULL,
  `type` varchar(191) DEFAULT NULL,
  `note` varchar(191) DEFAULT NULL,
  `is_other` tinyint(1) DEFAULT NULL,
  `is_custom_price` tinyint(1) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  `createdAt` datetime(3) DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rate_sosmed`
--

INSERT INTO `rate_sosmed` (`id`, `name`, `instagram`, `facebook`, `rate`, `type`, `note`, `is_other`, `is_custom_price`, `is_deleted`, `createdAt`, `updatedAt`) VALUES
('clt9r0h2800039nlvjd8rbtc9', 'feed', 300000, 4000000, NULL, NULL, '-', 0, 0, NULL, '2024-03-02 07:15:01.087', '2024-03-02 07:15:01.087'),
('clt9r1ej200049nlvkjy018i4', 'story', NULL, NULL, 50000, 'Tiktok', '-', 1, 0, NULL, '2024-03-02 07:15:44.462', '2024-03-02 07:15:44.462');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` varchar(191) NOT NULL,
  `role` varchar(191) NOT NULL,
  `number_role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `role`, `number_role`) VALUES
('clt8my2pp00016mtegqa6hckj', 'admin', 1),
('clt8mya6n00026mtehcvzczsf', 'sales', 2),
('clt8o01l2000pi6ihgfgr0oqf', 'manager', 3),
('clt8ok3m50000srdespfzfzyz', 'VP', 4),
('clt8oraq10003srdejk6c0jzq', 'pic_artikel', 5);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `jabatan` varchar(191) DEFAULT NULL,
  `phone` varchar(191) DEFAULT NULL,
  `password` varchar(191) NOT NULL,
  `role_id` varchar(191) NOT NULL,
  `is_deleted` tinyint(1) DEFAULT NULL,
  `createdAt` datetime(3) DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `jabatan`, `phone`, `password`, `role_id`, `is_deleted`, `createdAt`, `updatedAt`) VALUES
('clt8myxag00046mteo6utx2cq', 'admin PRMN', 'admin@gmail.com', NULL, NULL, '$2b$10$dZwzmZlEANEnuOPEAdF4r.b8VFKFVeFFrGNi5fcCfIuMQRgUE6wqi', 'clt8my2pp00016mtegqa6hckj', NULL, '2024-03-01 12:34:04.167', '2024-03-01 12:34:04.167'),
('clt8n1kzs00076mte04reswls', 'sales', 'sales@gmail.com', 'sales', '876869678', '$2b$10$fbcF7yHRHWkmOIKq99f9be4NgMg3hUK/wnlXDanKd17mtXZ5FQmwK', 'clt8mya6n00026mtehcvzczsf', NULL, '2024-03-01 12:36:08.200', '2024-03-01 12:36:08.200'),
('clt8o14c0000ri6iheiekoumh', 'manager@gmail.com', 'manager@gmail.com', 'manager', '8768768', '$2b$10$cnSVMJ4HxdIVrSK8Fw09E.SlXc45VZvU.CNP38NrQn.hERGxzckNC', 'clt8o01l2000pi6ihgfgr0oqf', NULL, '2024-03-01 13:03:46.223', '2024-03-01 13:03:46.223'),
('clt8ol27p0002srde6fsffhor', 'Vp', 'vp@gmail.com', 'VP', '09809098', '$2b$10$NcKmijzwnZiU3liW9Smu.ewLxw0WkcyCiX4o8PiBRWf712hhrHEFS', 'clt8ok3m50000srdespfzfzyz', NULL, '2024-03-01 13:19:16.597', '2024-03-01 13:19:16.597'),
('clt8osc8p0005srdenpjm4i11', 'PIC', 'pic.artikel@gmail.com', 'PIC Artikel', '8768768', '$2b$10$PAPkD.XbRKRJ6aHP8IHgzeIWVjfu3xBwgQ2/ZLQVkWg01beP7vfWq', 'clt8oraq10003srdejk6c0jzq', NULL, '2024-03-01 13:24:56.185', '2024-03-01 13:24:56.185'),
('clt9r6uay000a9nlvb9bjxu8o', 'hafid', 'hafid@gmail.com', 'sales', '09980978866', '$2b$10$HSu8AXayNWbZXdy1krpWy.tLBmNpaOFpCLUgxp/OdHleK4KOcNUnW', 'clt8mya6n00026mtehcvzczsf', NULL, '2024-03-02 07:19:58.185', '2024-03-02 07:19:58.185');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `custs`
--
ALTER TABLE `custs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `listproduk`
--
ALTER TABLE `listproduk`
  ADD PRIMARY KEY (`id`),
  ADD KEY `listProduk_idOrder_fkey` (`idOrder`);

--
-- Indexes for table `mitra`
--
ALTER TABLE `mitra`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Order_id_cust_fkey` (`id_cust`),
  ADD KEY `Order_id_user_fkey` (`id_user`);

--
-- Indexes for table `ordermitra`
--
ALTER TABLE `ordermitra`
  ADD PRIMARY KEY (`idMitra`,`idOrder`),
  ADD KEY `OrderMitra_idOrder_fkey` (`idOrder`);

--
-- Indexes for table `ordertayangiklan`
--
ALTER TABLE `ordertayangiklan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `OrderTayangIklan_idOrder_fkey` (`idOrder`);

--
-- Indexes for table `paybarter`
--
ALTER TABLE `paybarter`
  ADD PRIMARY KEY (`idOrder`);

--
-- Indexes for table `paycash`
--
ALTER TABLE `paycash`
  ADD PRIMARY KEY (`idOrder`);

--
-- Indexes for table `paydeposit`
--
ALTER TABLE `paydeposit`
  ADD PRIMARY KEY (`idOrder`);

--
-- Indexes for table `paykredit`
--
ALTER TABLE `paykredit`
  ADD PRIMARY KEY (`idOrder`);

--
-- Indexes for table `paysemibarter`
--
ALTER TABLE `paysemibarter`
  ADD PRIMARY KEY (`idOrder`);

--
-- Indexes for table `paytermin`
--
ALTER TABLE `paytermin`
  ADD PRIMARY KEY (`idOrder`);

--
-- Indexes for table `rate_article`
--
ALTER TABLE `rate_article`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rate_cpd`
--
ALTER TABLE `rate_cpd`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rate_cpm`
--
ALTER TABLE `rate_cpm`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rate_other_content`
--
ALTER TABLE `rate_other_content`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rate_sosmed`
--
ALTER TABLE `rate_sosmed`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`),
  ADD KEY `User_role_id_fkey` (`role_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `listproduk`
--
ALTER TABLE `listproduk`
  ADD CONSTRAINT `listProduk_idOrder_fkey` FOREIGN KEY (`idOrder`) REFERENCES `order` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `Order_id_cust_fkey` FOREIGN KEY (`id_cust`) REFERENCES `custs` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Order_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `ordermitra`
--
ALTER TABLE `ordermitra`
  ADD CONSTRAINT `OrderMitra_idMitra_fkey` FOREIGN KEY (`idMitra`) REFERENCES `mitra` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `OrderMitra_idOrder_fkey` FOREIGN KEY (`idOrder`) REFERENCES `order` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `ordertayangiklan`
--
ALTER TABLE `ordertayangiklan`
  ADD CONSTRAINT `OrderTayangIklan_idOrder_fkey` FOREIGN KEY (`idOrder`) REFERENCES `order` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `paybarter`
--
ALTER TABLE `paybarter`
  ADD CONSTRAINT `payBarter_idOrder_fkey` FOREIGN KEY (`idOrder`) REFERENCES `order` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `paycash`
--
ALTER TABLE `paycash`
  ADD CONSTRAINT `payCash_idOrder_fkey` FOREIGN KEY (`idOrder`) REFERENCES `order` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `paydeposit`
--
ALTER TABLE `paydeposit`
  ADD CONSTRAINT `payDeposit_idOrder_fkey` FOREIGN KEY (`idOrder`) REFERENCES `order` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `paykredit`
--
ALTER TABLE `paykredit`
  ADD CONSTRAINT `payKredit_idOrder_fkey` FOREIGN KEY (`idOrder`) REFERENCES `order` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `paysemibarter`
--
ALTER TABLE `paysemibarter`
  ADD CONSTRAINT `paySemiBarter_idOrder_fkey` FOREIGN KEY (`idOrder`) REFERENCES `order` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `paytermin`
--
ALTER TABLE `paytermin`
  ADD CONSTRAINT `payTermin_idOrder_fkey` FOREIGN KEY (`idOrder`) REFERENCES `order` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `User_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
