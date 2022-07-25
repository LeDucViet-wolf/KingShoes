insert into tblProductReview(`product_id`,`customer_id`,`comment`,`point`) values
(1,1,'Tuyệt vời',10),
(2,2,'Tuyệt vời',20),
(3,3,'Tuyệt vời',30),
(4,4,'Tuyệt vời',40),
(5,5,'Tuyệt vời',50),
(6,6,'Tuyệt vời',60),
(7,7,'Tuyệt vời',70),
(8,8,'Tuyệt vời',80),
(9,9,'Tuyệt vời',90),
(10,10,'Tuyệt vời',10);

insert into tblCustomer(`first_name`,`last_name`,`birthday`,`gender`,`email`,`phone`,`password`,`address`,`status`) values
('Nguyễn Ngọc','Thúy','1990-11-23',0,'nguyenngocthuy@gmail.com','0832536199','123','Khu tập thể A3 Nam Đồng, A1P49, Phố P. Hồ Đắc Di, Nam Đồng, Đống Đa, Hà Nội',1),
('Đáo Đức','Thành','1991-11-23',1,'daoducthanh@gmail.com','0832536200','123','Tòa nhà C´Land, 156 Ng. Xã Đàn 2, Nam Đồng, Đống Đa, Hà Nội',0),
('Tô','Nghị','1992-11-23',0,'tonghi@gmail.com','0832536201','123','Trần Hưng Đạo, Hoàn Kiếm, Hà Nội',1),
('Nguyễn Lê','Tuấn','1993-11-23',1,'nguyenletuan@gmail.com','0832536202','123','81 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội',0),
('Trần Thị','Thu','1994-11-23',0,'tranthithu@gmail.com','0832536203','123','6 Ng. 84 P. Trần Quang Diệu, Chợ Dừa, Đống Đa, Hà Nội',1),
('Phạm Duy','Hồng','1995-11-23',1,'phamduyhong@gmail.com','0832536204','123','65 Nguyễn Đình Thi, Thuỵ Khuê, Tây Hồ, Hà Nội',0),
('Lê Hồng','Nguyên','1996-11-23',0,'lehongnguyen@gmail.com','0832536205','123','51 Đ. Âu Cơ, Tứ Liên, Tây Hồ, Hà Nội',1),
('Hồ Cung Đạt','Nhân','1997-11-23',1,'hocungdatnhan@gmail.com','0832536206','123','Hàng Bột, Đống Đa, Hà Nội',0),
('Chu Văn','Nam','1998-11-23',0,'chuvannam@gmail.com','0832536207','123','9b Nguyễn Đình Thi, Thuỵ Khuê, Tây Hồ, Hà Nội',1),
('Huỳnh Đức','Long','1999-11-23',1,'huynhduclong@gmail.com','0832536208','123','88 P.Yên Lãng, Láng Hạ, Đống Đa, Trung Hoà Cầu Giấy Hà Nội',0);

insert into tblQuote(`customer_id`,`is_paid`) values
(1,1),
(2,0),
(3,1),
(4,0),
(5,1),
(6,0),
(7,1),
(8,0),
(9,1),
(10,0);

insert into tblQuoteItem(`quote_id`,`product_id`,`quantity`,`row_total`) values
(1,1,1000,10000),
(2,2,2000,20000),
(3,3,3000,30000),
(4,4,4000,40000),
(5,5,5000,50000),
(6,6,6000,60000),
(7,7,7000,70000),
(8,8,8000,80000),
(9,9,9000,90000),
(10,10,10000,100000);

insert into tblCustomerPoint(`customer_id`,`value`) values
(1,10),
(2,20),
(3,30),
(4,40),
(5,50),
(6,60),
(7,70),
(8,80),
(9,90),
(10,100);

insert into tblRole(`name`,`resource`, `is_admin`) values
('Admin', '', 1),
('Vendor', '', 2);

insert into tblUser(`first_name`,`last_name`,`account`,`password`,`image`,`role_id`) values
('Lê Đức', 'Việt', 'leducviet', 'admin.123', '', 2),
('Hoàng Cao', 'Long', 'hoangcaolong', 'admin.123', '', 2),
('Đặng Tuấn', 'Đạt', 'dangtuandat', 'admin.123', '', 1);

insert into tblShippingMethod(`name`,`price`,`code`,`status`) values
('Free Shipping', 0, 'FSP', 1),
('Domestic Express Delivery', 100000, 'DED', 1),
('Express Delivery Abroad', 200000, 'EDA', 2);

insert into tblPaymentMethod(`name`,`code`,`status`) values
('Cash On Delivery', 'COD', 1);

INSERT INTO `tblcategory` (`entity_id`, `name`, `image`, `status`) VALUES
(1, 'Nike', NULL, 1),
(2, 'Adidas', NULL, 1),
(3, 'Jordan', NULL, 1),
(4, 'Yeezy', NULL, 1);

INSERT INTO `tblproduct` (`entity_id`, `name`, `price`, `sku`, `size`, `quantity`, `description`, `status`, `category_id`) VALUES
(1, 'Air Force 1', 3300000, 'air-force-1-36', 36, 100, '', 1, 1),
(2, 'Air Force 1', 3300000, 'air-force-1-37', 37, 100, '', 1, 1),
(3, 'Air Force 1', 3300000, 'air-force-1-38', 38, 100, '', 1, 1),
(4, 'Air Force 1', 3300000, 'air-force-1-39', 39, 100, '', 1, 1),
(5, 'Air Force 1', 3300000, 'air-force-1-40', 40, 100, '', 1, 1),
(6, 'Air Force 1', 3300000, 'air-force-1-41', 41, 100, '', 1, 1),
(7, 'Air Force 1', 3300000, 'air-force-1-42', 42, 100, '', 1, 1),
(8, 'Air Force 1', 3300000, 'air-force-1-43', 43, 100, '', 1, 1),
(9, 'Air Max Terrascape 90', 3600000, 'air-max-terrascape-90-36', 36, 100, '', 1, 1),
(10, 'Air Max Terrascape 90', 3600000, 'air-max-terrascape-90-37', 37, 100, '', 1, 1),
(11, 'Air Max Terrascape 90', 3600000, 'air-max-terrascape-90-38', 38, 100, '', 1, 1),
(12, 'Air Max Terrascape 90', 3600000, 'air-max-terrascape-90-39', 39, 100, '', 1, 1),
(13, 'Air Max Terrascape 90', 3600000, 'air-max-terrascape-90-40', 40, 100, '', 1, 1),
(14, 'Air Max Terrascape 90', 3600000, 'air-max-terrascape-90-41', 41, 100, '', 1, 1),
(15, 'Air Max Terrascape 90', 3600000, 'air-max-terrascape-90-42', 42, 100, '', 1, 1),
(16, 'Air Max Terrascape 90', 3600000, 'air-max-terrascape-90-43', 43, 100, '', 1, 1),
(17, 'Free Run 2', 2900000, 'free-run-2-36', 36, 100, '', 1, 1),
(18, 'Free Run 2', 2900000, 'free-run-2-37', 37, 100, '', 1, 1),
(19, 'Free Run 2', 2900000, 'free-run-2-38', 38, 100, '', 1, 1),
(20, 'Free Run 2', 2900000, 'free-run-2-39', 39, 100, '', 1, 1),
(21, 'Free Run 2', 2900000, 'free-run-2-40', 40, 100, '', 1, 1),
(22, 'Free Run 2', 2900000, 'free-run-2-41', 41, 100, '', 1, 1),
(23, 'Free Run 2', 2900000, 'free-run-2-42', 42, 100, '', 1, 1),
(24, 'Free Run 2', 2900000, 'free-run-2-43', 43, 100, '', 1, 1),
(25, 'Air Max AP', 3200000, 'air-max-ap-36', 36, 100, '', 1, 1),
(26, 'Air Max AP', 3200000, 'air-max-ap-37', 37, 100, '', 1, 1),
(27, 'Air Max AP', 3200000, 'air-max-ap-38', 38, 100, '', 1, 1),
(28, 'Air Max AP', 3200000, 'air-max-ap-39', 39, 100, '', 1, 1),
(29, 'Air Max AP', 3200000, 'air-max-ap-40', 40, 100, '', 1, 1),
(30, 'Air Max AP', 3200000, 'air-max-ap-41', 41, 100, '', 1, 1),
(31, 'Air Max AP', 3200000, 'air-max-ap-42', 42, 100, '', 1, 1),
(32, 'Air Max AP', 3200000, 'air-max-ap-43', 43, 100, '', 1, 1),
(33, 'Pegasus 38', 3800000, 'pegasus-36', 36, 100, '', 1, 1),
(34, 'Pegasus 38', 3800000, 'pegasus-37', 37, 100, '', 1, 1),
(35, 'Pegasus 38', 3800000, 'pegasus-38', 38, 100, '', 1, 1),
(36, 'Pegasus 38', 3800000, 'pegasus-39', 39, 100, '', 1, 1),
(37, 'Pegasus 38', 3800000, 'pegasus-40', 40, 100, '', 1, 1),
(38, 'Pegasus 38', 3800000, 'pegasus-41', 41, 100, '', 1, 1),
(39, 'Pegasus 38', 3800000, 'pegasus-42', 42, 100, '', 1, 1),
(40, 'Pegasus 38', 3800000, 'pegasus-43', 43, 100, '', 1, 1),
(41, 'Court Legacy', 2200000, 'count-legacy-36', 36, 100, '', 1, 1),
(42, 'Court Legacy', 2200000, 'count-legacy-37', 37, 100, '', 1, 1),
(43, 'Court Legacy', 2200000, 'count-legacy-38', 38, 100, '', 1, 1),
(44, 'Court Legacy', 2200000, 'count-legacy-39', 39, 100, '', 1, 1),
(45, 'Court Legacy', 2200000, 'count-legacy-40', 40, 100, '', 1, 1),
(46, 'Court Legacy', 2200000, 'count-legacy-41', 41, 100, '', 1, 1),
(47, 'Court Legacy', 2200000, 'count-legacy-42', 42, 100, '', 1, 1),
(48, 'Court Legacy', 2200000, 'count-legacy-43', 43, 100, '', 1, 1),
(49, 'Zoom X Invicible', 3900000, 'zoom-x-invicible-36', 36, 100, '', 1, 1),
(50, 'Zoom X Invicible', 3900000, 'zoom-x-invicible-37', 37, 100, '', 1, 1),
(51, 'Zoom X Invicible', 3900000, 'zoom-x-invicible-38', 38, 100, '', 1, 1),
(52, 'Zoom X Invicible', 3900000, 'zoom-x-invicible-39', 39, 100, '', 1, 1),
(53, 'Zoom X Invicible', 3900000, 'zoom-x-invicible-40', 40, 100, '', 1, 1),
(54, 'Zoom X Invicible', 3900000, 'zoom-x-invicible-41', 41, 100, '', 1, 1),
(55, 'Zoom X Invicible', 3900000, 'zoom-x-invicible-42', 42, 100, '', 1, 1),
(56, 'Zoom X Invicible', 3900000, 'zoom-x-invicible-43', 43, 100, '', 1, 1),
(57, 'Air Max 97', 4200000, 'air-max-97-36', 36, 100, '', 1, 1),
(58, 'Air Max 97', 4200000, 'air-max-97-37', 37, 100, '', 1, 1),
(59, 'Air Max 97', 4200000, 'air-max-97-38', 38, 100, '', 1, 1),
(60, 'Air Max 97', 4200000, 'air-max-97-39', 39, 100, '', 1, 1),
(61, 'Air Max 97', 4200000, 'air-max-97-40', 40, 100, '', 1, 1),
(62, 'Air Max 97', 4200000, 'air-max-97-41', 41, 100, '', 1, 1),
(63, 'Air Max 97', 4200000, 'air-max-97-43', 43, 100, '', 1, 1),
(64, 'Air Max 97', 4200000, 'air-max-97-42', 42, 100, '', 1, 1),
(65, 'Air Zoom Pegasus 38', 3200000, 'air-zoom-pegasus-38-36', 36, 100, '', 1, 1),
(66, 'Air Zoom Pegasus 38', 3200000, 'air-zoom-pegasus-38-37', 37, 100, '', 1, 1),
(67, 'Air Zoom Pegasus 38', 3200000, 'air-zoom-pegasus-38-38', 38, 100, '', 1, 1),
(68, 'Air Zoom Pegasus 38', 3200000, 'air-zoom-pegasus-38-39', 39, 100, '', 1, 1),
(69, 'Air Zoom Pegasus 38', 3200000, 'air-zoom-pegasus-38-40', 40, 100, '', 1, 1),
(70, 'Air Zoom Pegasus 38', 3200000, 'air-zoom-pegasus-38-41', 41, 100, '', 1, 1),
(71, 'Air Zoom Pegasus 38', 3200000, 'air-zoom-pegasus-38-43', 43, 100, '', 1, 1),
(72, 'Air Zoom Pegasus 38', 3200000, 'air-zoom-pegasus-38-42', 42, 100, '', 1, 1),
(73, 'EQ21', 2600000, 'eq21-36', 36, 100, '', 1, 1),
(74, 'EQ21', 2600000, 'eq21-37', 37, 100, '', 1, 1),
(75, 'EQ21', 2600000, 'eq21-38', 38, 100, '', 1, 1),
(76, 'EQ21', 2600000, 'eq21-39', 39, 100, '', 1, 1),
(77, 'EQ21', 2600000, 'eq21-40', 40, 100, '', 1, 1),
(78, 'EQ21', 2600000, 'eq21-41', 41, 100, '', 1, 1),
(79, 'EQ21', 2600000, 'eq21-42', 42, 100, '', 1, 1),
(80, 'EQ21', 2600000, 'eq21-43', 43, 100, '', 1, 1),
(81, 'ZX 2K Boost', 3600000, 'zx-2k-boost-36', 36, 100, '', 1, 1),
(82, 'ZX 2K Boost', 3600000, 'zx-2k-boost-37', 37, 100, '', 1, 1),
(83, 'ZX 2K Boost', 3600000, 'zx-2k-boost-38', 38, 100, '', 1, 1),
(84, 'ZX 2K Boost', 3600000, 'zx-2k-boost-39', 39, 100, '', 1, 1),
(85, 'ZX 2K Boost', 3600000, 'zx-2k-boost-40', 40, 100, '', 1, 1),
(86, 'ZX 2K Boost', 3600000, 'zx-2k-boost-41', 41, 100, '', 1, 1),
(87, 'ZX 2K Boost', 3600000, 'zx-2k-boost-42', 42, 100, '', 1, 1),
(88, 'ZX 2K Boost', 3600000, 'zx-2k-boost-43', 43, 100, '', 1, 1),
(89, 'Forumn Low Green', 2900000, 'forumn-low-green-36', 36, 100, '', 1, 1),
(90, 'Forumn Low Green', 2900000, 'forumn-low-green-37', 37, 100, '', 1, 1),
(91, 'Forumn Low Green', 2900000, 'forumn-low-green-38', 38, 100, '', 1, 1),
(92, 'Forumn Low Green', 2900000, 'forumn-low-green-39', 39, 100, '', 1, 1),
(93, 'Forumn Low Green', 2900000, 'forumn-low-green-40', 40, 100, '', 1, 1),
(94, 'Forumn Low Green', 2900000, 'forumn-low-green-41', 41, 100, '', 1, 1),
(95, 'Forumn Low Green', 2900000, 'forumn-low-green-42', 42, 100, '', 1, 1),
(96, 'Forumn Low Green', 2900000, 'forumn-low-green-43', 43, 100, '', 1, 1),
(97, 'Ultraboost 20 Cloud White', 3200000, 'ultraboost-20-cloud-white-36', 36, 100, '', 1, 1),
(98, 'Ultraboost 20 Cloud White', 3200000, 'ultraboost-20-cloud-white-37', 37, 100, '', 1, 1),
(99, 'Ultraboost 20 Cloud White', 3200000, 'ultraboost-20-cloud-white-38', 38, 100, '', 1, 1),
(100, 'Ultraboost 20 Cloud White', 3200000, 'ultraboost-20-cloud-white-39', 39, 100, '', 1, 1),
(101, 'Ultraboost 20 Cloud White', 3200000, 'ultraboost-20-cloud-white-40', 40, 100, '', 1, 1),
(102, 'Ultraboost 20 Cloud White', 3200000, 'ultraboost-20-cloud-white-41', 41, 100, '', 1, 1),
(103, 'Ultraboost 20 Cloud White', 3200000, 'ultraboost-20-cloud-white-42', 42, 100, '', 1, 1),
(104, 'Ultraboost 20 Cloud White', 3200000, 'ultraboost-20-cloud-white-43', 43, 100, '', 1, 1),
(105, 'Ultraboost 20 Tech Purple', 3800000, 'ultraboost-20-tech-purple-36', 36, 100, '', 1, 1),
(106, 'Ultraboost 20 Tech Purple', 3800000, 'ultraboost-20-tech-purple-37', 37, 100, '', 1, 1),
(107, 'Ultraboost 20 Tech Purple', 3800000, 'ultraboost-20-tech-purple-38', 38, 100, '', 1, 1),
(108, 'Ultraboost 20 Tech Purple', 3800000, 'ultraboost-20-tech-purple-39', 39, 100, '', 1, 1),
(109, 'Ultraboost 20 Tech Purple', 3800000, 'ultraboost-20-tech-purple-40', 40, 100, '', 1, 1),
(110, 'Ultraboost 20 Tech Purple', 3800000, 'ultraboost-20-tech-purple-41', 41, 100, '', 1, 1),
(111, 'Ultraboost 20 Tech Purple', 3800000, 'ultraboost-20-tech-purple-42', 42, 100, '', 1, 1),
(112, 'Ultraboost 20 Tech Purple', 3800000, 'ultraboost-20-tech-purple-43', 43, 100, '', 1, 1),
(113, 'Forumn Low Blue', 2200000, 'forumn-low-blue-36', 36, 100, '', 1, 1),
(114, 'Forumn Low Blue', 2200000, 'forumn-low-blue-37', 37, 100, '', 1, 1),
(115, 'Forumn Low Blue', 2200000, 'forumn-low-blue-38', 38, 100, '', 1, 1),
(116, 'Forumn Low Blue', 2200000, 'forumn-low-blue-39', 39, 100, '', 1, 1),
(117, 'Forumn Low Blue', 2200000, 'forumn-low-blue-40', 40, 100, '', 1, 1),
(118, 'Forumn Low Blue', 2200000, 'forumn-low-blue-41', 41, 100, '', 1, 1),
(119, 'Forumn Low Blue', 2200000, 'forumn-low-blue-42', 42, 100, '', 1, 1),
(120, 'Forumn Low Blue', 2200000, 'forumn-low-blue-43', 43, 100, '', 1, 1),
(121, 'Continental 80', 3900000, 'continental-80-36', 36, 100, '', 1, 1),
(122, 'Continental 80', 3900000, 'continental-80-37', 37, 100, '', 1, 1),
(123, 'Continental 80', 3900000, 'continental-80-38', 38, 100, '', 1, 1),
(124, 'Continental 80', 3900000, 'continental-80-39', 39, 100, '', 1, 1),
(125, 'Continental 80', 3900000, 'continental-80-40', 40, 100, '', 1, 1),
(126, 'Continental 80', 3900000, 'continental-80-41', 41, 100, '', 1, 1),
(127, 'Continental 80', 3900000, 'continental-80-42', 42, 100, '', 1, 1),
(128, 'Continental 80', 3900000, 'continental-80-43', 43, 100, '', 1, 1),
(129, 'Superstar', 4200000, 'superstar-36', 36, 100, '', 1, 1),
(130, 'Superstar', 4200000, 'superstar-37', 37, 100, '', 1, 1),
(131, 'Superstar', 4200000, 'superstar-38', 38, 100, '', 1, 1),
(132, 'Superstar', 4200000, 'superstar-39', 39, 100, '', 1, 1),
(133, 'Superstar', 4200000, 'superstar-40', 40, 100, '', 1, 1),
(134, 'Superstar', 4200000, 'superstar-41', 41, 100, '', 1, 1),
(135, 'Superstar', 4200000, 'superstar-43', 43, 100, '', 1, 1),
(136, 'Superstar', 4200000, 'superstar-42', 42, 100, '', 1, 1),
(137, 'Supergrip', 3200000, 'supergrip-38-36', 36, 100, '', 1, 1),
(138, 'Supergrip', 3200000, 'supergrip-38-37', 37, 100, '', 1, 1),
(139, 'Supergrip', 3200000, 'supergrip-38-38', 38, 100, '', 1, 1),
(140, 'Supergrip', 3200000, 'supergrip-38-39', 39, 100, '', 1, 1),
(141, 'Supergrip', 3200000, 'supergrip-38-40', 40, 100, '', 1, 1),
(142, 'Supergrip', 3200000, 'supergrip-38-41', 41, 100, '', 1, 1),
(143, 'Supergrip', 3200000, 'supergrip-38-43', 43, 100, '', 1, 1),
(144, 'Supergrip', 3200000, 'supergrip-38-42', 42, 100, '', 1, 1),
(145, 'Jordan MA2', 2600000, 'jordan-ma2-36', 36, 100, '', 1, 1),
(146, 'Jordan MA2', 2600000, 'jordan-ma2-37', 37, 100, '', 1, 1),
(147, 'Jordan MA2', 2600000, 'jordan-ma2-38', 38, 100, '', 1, 1),
(148, 'Jordan MA2', 2600000, 'jordan-ma2-39', 39, 100, '', 1, 1),
(149, 'Jordan MA2', 2600000, 'jordan-ma2-40', 40, 100, '', 1, 1),
(150, 'Jordan MA2', 2600000, 'jordan-ma2-41', 41, 100, '', 1, 1),
(151, 'Jordan MA2', 2600000, 'jordan-ma2-42', 42, 100, '', 1, 1),
(152, 'Jordan MA2', 2600000, 'jordan-ma2-43', 43, 100, '', 1, 1),
(153, 'Jordan Series ES', 3600000, 'jordanseries-es-36', 36, 100, '', 1, 1),
(154, 'Jordan Series ES', 3600000, 'jordanseries-es-37', 37, 100, '', 1, 1),
(155, 'Jordan Series ES', 3600000, 'jordanseries-es-38', 38, 100, '', 1, 1),
(156, 'Jordan Series ES', 3600000, 'jordanseries-es-39', 39, 100, '', 1, 1),
(157, 'Jordan Series ES', 3600000, 'jordanseries-es-40', 40, 100, '', 1, 1),
(158, 'Jordan Series ES', 3600000, 'jordanseries-es-41', 41, 100, '', 1, 1),
(159, 'Jordan Series ES', 3600000, 'jordanseries-es-42', 42, 100, '', 1, 1),
(160, 'Jordan Series ES', 3600000, 'jordanseries-es-43', 43, 100, '', 1, 1),
(161, 'Dunk Low Paisley', 2900000, 'dunk-low-paisley-36', 36, 100, '', 1, 1),
(162, 'Dunk Low Paisley', 2900000, 'dunk-low-paisley-37', 37, 100, '', 1, 1),
(163, 'Dunk Low Paisley', 2900000, 'dunk-low-paisley-38', 38, 100, '', 1, 1),
(164, 'Dunk Low Paisley', 2900000, 'dunk-low-paisley-39', 39, 100, '', 1, 1),
(165, 'Dunk Low Paisley', 2900000, 'dunk-low-paisley-40', 40, 100, '', 1, 1),
(166, 'Dunk Low Paisley', 2900000, 'dunk-low-paisley-41', 41, 100, '', 1, 1),
(167, 'Dunk Low Paisley', 2900000, 'dunk-low-paisley-42', 42, 100, '', 1, 1),
(168, 'Dunk Low Paisley', 2900000, 'dunk-low-paisley-43', 43, 100, '', 1, 1),
(169, 'Dunk High Up Pastels', 3200000, 'dunk-high-up-pastels-36', 36, 100, '', 1, 1),
(170, 'Dunk High Up Pastels', 3200000, 'dunk-high-up-pastels-37', 37, 100, '', 1, 1),
(171, 'Dunk High Up Pastels', 3200000, 'dunk-high-up-pastels-38', 38, 100, '', 1, 1),
(172, 'Dunk High Up Pastels', 3200000, 'dunk-high-up-pastels-39', 39, 100, '', 1, 1),
(173, 'Dunk High Up Pastels', 3200000, 'dunk-high-up-pastels-40', 40, 100, '', 1, 1),
(174, 'Dunk High Up Pastels', 3200000, 'dunk-high-up-pastels-41', 41, 100, '', 1, 1),
(175, 'Dunk High Up Pastels', 3200000, 'dunk-high-up-pastels-42', 42, 100, '', 1, 1),
(176, 'Dunk High Up Pastels', 3200000, 'dunk-high-up-pastels-43', 43, 100, '', 1, 1),
(177, 'Jordan 1 Low Denim', 3800000, 'jordan-1-low-denim-36', 36, 100, '', 1, 1),
(178, 'Jordan 1 Low Denim', 3800000, 'jordan-1-low-denim-37', 37, 100, '', 1, 1),
(179, 'Jordan 1 Low Denim', 3800000, 'jordan-1-low-denim-38', 38, 100, '', 1, 1),
(180, 'Jordan 1 Low Denim', 3800000, 'jordan-1-low-denim-39', 39, 100, '', 1, 1),
(181, 'Jordan 1 Low Denim', 3800000, 'jordan-1-low-denim-40', 40, 100, '', 1, 1),
(182, 'Jordan 1 Low Denim', 3800000, 'jordan-1-low-denim-41', 41, 100, '', 1, 1),
(183, 'Jordan 1 Low Denim', 3800000, 'jordan-1-low-denim-42', 42, 100, '', 1, 1),
(184, 'Jordan 1 Low Denim', 3800000, 'jordan-1-low-denim-43', 43, 100, '', 1, 1),
(185, 'Jordan 1 Low', 2200000, 'jordan-1-low-36', 36, 100, '', 1, 1),
(186, 'Jordan 1 Low', 2200000, 'jordan-1-low-37', 37, 100, '', 1, 1),
(187, 'Jordan 1 Low', 2200000, 'jordan-1-low-38', 38, 100, '', 1, 1),
(188, 'Jordan 1 Low', 2200000, 'jordan-1-low-39', 39, 100, '', 1, 1),
(189, 'Jordan 1 Low', 2200000, 'jordan-1-low-40', 40, 100, '', 1, 1),
(190, 'Jordan 1 Low', 2200000, 'jordan-1-low-41', 41, 100, '', 1, 1),
(191, 'Jordan 1 Low', 2200000, 'jordan-1-low-42', 42, 100, '', 1, 1),
(192, 'Jordan 1 Low', 2200000, 'jordan-1-low-43', 43, 100, '', 1, 1),
(193, 'Air Jordan 1 Elevate Low', 3900000, 'air-jordan-1-elevate-low-36', 36, 100, '', 1, 1),
(194, 'Air Jordan 1 Elevate Low', 3900000, 'air-jordan-1-elevate-low-37', 37, 100, '', 1, 1),
(195, 'Air Jordan 1 Elevate Low', 3900000, 'air-jordan-1-elevate-low-38', 38, 100, '', 1, 1),
(196, 'Air Jordan 1 Elevate Low', 3900000, 'air-jordan-1-elevate-low-39', 39, 100, '', 1, 1),
(197, 'Air Jordan 1 Elevate Low', 3900000, 'air-jordan-1-elevate-low-40', 40, 100, '', 1, 1),
(198, 'Air Jordan 1 Elevate Low', 3900000, 'air-jordan-1-elevate-low-41', 41, 100, '', 1, 1),
(199, 'Air Jordan 1 Elevate Low', 3900000, 'air-jordan-1-elevate-low-42', 42, 100, '', 1, 1),
(200, 'Air Jordan 1 Elevate Low', 3900000, 'air-jordan-1-elevate-low-43', 43, 100, '', 1, 1),
(201, 'Air Jordan 1 Low Bred Toe', 4200000, 'air-jordan-1-low-bred-toe-36', 36, 100, '', 1, 1),
(202, 'Air Jordan 1 Low Bred Toe', 4200000, 'air-jordan-1-low-bred-toe-37', 37, 100, '', 1, 1),
(203, 'Air Jordan 1 Low Bred Toe', 4200000, 'air-jordan-1-low-bred-toe-38', 38, 100, '', 1, 1),
(204, 'Air Jordan 1 Low Bred Toe', 4200000, 'air-jordan-1-low-bred-toe-39', 39, 100, '', 1, 1),
(205, 'Air Jordan 1 Low Bred Toe', 4200000, 'air-jordan-1-low-bred-toe-40', 40, 100, '', 1, 1),
(206, 'Air Jordan 1 Low Bred Toe', 4200000, 'air-jordan-1-low-bred-toe-41', 41, 100, '', 1, 1),
(207, 'Air Jordan 1 Low Bred Toe', 4200000, 'air-jordan-1-low-bred-toe-43', 43, 100, '', 1, 1),
(208, 'Air Jordan 1 Low Bred Toe', 4200000, 'air-jordan-1-low-bred-toe-42', 42, 100, '', 1, 1),
(209, 'Jordan 1 Low Smoke Grey', 3200000, 'jordan-1-low-smoke-grey-36', 36, 100, '', 1, 1),
(210, 'Jordan 1 Low Smoke Grey', 3200000, 'jordan-1-low-smoke-grey-37', 37, 100, '', 1, 1),
(211, 'Jordan 1 Low Smoke Grey', 3200000, 'jordan-1-low-smoke-grey-38', 38, 100, '', 1, 1),
(212, 'Jordan 1 Low Smoke Grey', 3200000, 'jordan-1-low-smoke-grey-39', 39, 100, '', 1, 1),
(213, 'Jordan 1 Low Smoke Grey', 3200000, 'jordan-1-low-smoke-grey-40', 40, 100, '', 1, 1),
(214, 'Jordan 1 Low Smoke Grey', 3200000, 'jordan-1-low-smoke-grey-41', 41, 100, '', 1, 1),
(215, 'Jordan 1 Low Smoke Grey', 3200000, 'jordan-1-low-smoke-grey-43', 43, 100, '', 1, 1),
(216, 'Jordan 1 Low Smoke Grey', 3200000, 'jordan-1-low-smoke-grey-42', 42, 100, '', 1, 1),
(217, 'Yeezy Boost 700 OG', 2600000, 'yeezy-boost-700-og-36', 36, 100, '', 1, 1),
(218, 'Yeezy Boost 700 OG', 2600000, 'yeezy-boost-700-og-37', 37, 100, '', 1, 1),
(219, 'Yeezy Boost 700 OG', 2600000, 'yeezy-boost-700-og-38', 38, 100, '', 1, 1),
(220, 'Yeezy Boost 700 OG', 2600000, 'yeezy-boost-700-og-39', 39, 100, '', 1, 1),
(221, 'Yeezy Boost 700 OG', 2600000, 'yeezy-boost-700-og-40', 40, 100, '', 1, 1),
(222, 'Yeezy Boost 700 OG', 2600000, 'yeezy-boost-700-og-41', 41, 100, '', 1, 1),
(223, 'Yeezy Boost 700 OG', 2600000, 'yeezy-boost-700-og-42', 42, 100, '', 1, 1),
(224, 'Yeezy Boost 700 OG', 2600000, 'yeezy-boost-700-og-43', 43, 100, '', 1, 1),
(225, 'Yeezy Boost 700 V2 Statis', 3600000, 'yeezy-boost-700-v2-static-36', 36, 100, '', 1, 1),
(226, 'Yeezy Boost 700 V2 Statis', 3600000, 'yeezy-boost-700-v2-static-37', 37, 100, '', 1, 1),
(227, 'Yeezy Boost 700 V2 Statis', 3600000, 'yeezy-boost-700-v2-static-38', 38, 100, '', 1, 1),
(228, 'Yeezy Boost 700 V2 Statis', 3600000, 'yeezy-boost-700-v2-static-39', 39, 100, '', 1, 1),
(229, 'Yeezy Boost 700 V2 Statis', 3600000, 'yeezy-boost-700-v2-static-40', 40, 100, '', 1, 1),
(230, 'Yeezy Boost 700 V2 Statis', 3600000, 'yeezy-boost-700-v2-static-41', 41, 100, '', 1, 1),
(231, 'Yeezy Boost 700 V2 Statis', 3600000, 'yeezy-boost-700-v2-static-42', 42, 100, '', 1, 1),
(232, 'Yeezy Boost 700 V2 Statis', 3600000, 'yeezy-boost-700-v2-static-43', 43, 100, '', 1, 1),
(233, 'Yeezy Boost 350 V2 Oreo', 2900000, 'yeezy-boost-350-v2-oreo-36', 36, 100, '', 1, 1),
(234, 'Yeezy Boost 350 V2 Oreo', 2900000, 'yeezy-boost-350-v2-oreo-37', 37, 100, '', 1, 1),
(235, 'Yeezy Boost 350 V2 Oreo', 2900000, 'yeezy-boost-350-v2-oreo-38', 38, 100, '', 1, 1),
(236, 'Yeezy Boost 350 V2 Oreo', 2900000, 'yeezy-boost-350-v2-oreo-39', 39, 100, '', 1, 1),
(237, 'Yeezy Boost 350 V2 Oreo', 2900000, 'yeezy-boost-350-v2-oreo-40', 40, 100, '', 1, 1),
(238, 'Yeezy Boost 350 V2 Oreo', 2900000, 'yeezy-boost-350-v2-oreo-41', 41, 100, '', 1, 1),
(239, 'Yeezy Boost 350 V2 Oreo', 2900000, 'yeezy-boost-350-v2-oreo-42', 42, 100, '', 1, 1),
(240, 'Yeezy Boost 350 V2 Oreo', 2900000, 'yeezy-boost-350-v2-oreo-43', 43, 100, '', 1, 1),
(241, 'Yeezy Boost 350 V2', 3200000, 'yeezy-boost-350-v2-36', 36, 100, '', 1, 1),
(242, 'Yeezy Boost 350 V2', 3200000, 'yeezy-boost-350-v2-37', 37, 100, '', 1, 1),
(243, 'Yeezy Boost 350 V2', 3200000, 'yeezy-boost-350-v2-38', 38, 100, '', 1, 1),
(244, 'Yeezy Boost 350 V2', 3200000, 'yeezy-boost-350-v2-39', 39, 100, '', 1, 1),
(245, 'Yeezy Boost 350 V2', 3200000, 'yeezy-boost-350-v2-40', 40, 100, '', 1, 1),
(246, 'Yeezy Boost 350 V2', 3200000, 'yeezy-boost-350-v2-41', 41, 100, '', 1, 1),
(247, 'Yeezy Boost 350 V2', 3200000, 'yeezy-boost-350-v2-42', 42, 100, '', 1, 1),
(248, 'Yeezy Boost 350 V2', 3200000, 'yeezy-boost-350-v2-43', 43, 100, '', 1, 1),
(249, 'Yeezy Boost 380 Pepper', 3800000, 'yeezy-boost-380-pepper-36', 36, 100, '', 1, 1),
(250, 'Yeezy Boost 380 Pepper', 3800000, 'yeezy-boost-380-pepper-37', 37, 100, '', 1, 1),
(251, 'Yeezy Boost 380 Pepper', 3800000, 'yeezy-boost-380-pepper-38', 38, 100, '', 1, 1),
(252, 'Yeezy Boost 380 Pepper', 3800000, 'yeezy-boost-380-pepper-39', 39, 100, '', 1, 1),
(253, 'Yeezy Boost 380 Pepper', 3800000, 'yeezy-boost-380-pepper-40', 40, 100, '', 1, 1),
(254, 'Yeezy Boost 380 Pepper', 3800000, 'yeezy-boost-380-pepper-41', 41, 100, '', 1, 1),
(255, 'Yeezy Boost 380 Pepper', 3800000, 'yeezy-boost-380-pepper-42', 42, 100, '', 1, 1),
(256, 'Yeezy Boost 380 Pepper', 3800000, 'yeezy-boost-380-pepper-43', 43, 100, '', 1, 1),
(257, 'Yeezy Boost 350 V2 Black Red', 2200000, 'yeezy-boost-350-v2-black-red-36', 36, 100, '', 1, 1),
(258, 'Yeezy Boost 350 V2 Black Red', 2200000, 'yeezy-boost-350-v2-black-red-37', 37, 100, '', 1, 1),
(259, 'Yeezy Boost 350 V2 Black Red', 2200000, 'yeezy-boost-350-v2-black-red-38', 38, 100, '', 1, 1),
(260, 'Yeezy Boost 350 V2 Black Red', 2200000, 'yeezy-boost-350-v2-black-red-39', 39, 100, '', 1, 1),
(261, 'Yeezy Boost 350 V2 Black Red', 2200000, 'yeezy-boost-350-v2-black-red-40', 40, 100, '', 1, 1),
(262, 'Yeezy Boost 350 V2 Black Red', 2200000, 'yeezy-boost-350-v2-black-red-41', 41, 100, '', 1, 1),
(263, 'Yeezy Boost 350 V2 Black Red', 2200000, 'yeezy-boost-350-v2-black-red-42', 42, 100, '', 1, 1),
(264, 'Yeezy Boost 350 V2 Black Red', 2200000, 'yeezy-boost-350-v2-black-red-43', 43, 100, '', 1, 1),
(265, 'Yeezy Boost 350 V2 Yeezreel', 3900000, 'yeezy-boost-350-v2-yeezreel-36', 36, 100, '', 1, 1),
(266, 'Yeezy Boost 350 V2 Yeezreel', 3900000, 'yeezy-boost-350-v2-yeezreel-37', 37, 100, '', 1, 1),
(267, 'Yeezy Boost 350 V2 Yeezreel', 3900000, 'yeezy-boost-350-v2-yeezreel-38', 38, 100, '', 1, 1),
(268, 'Yeezy Boost 350 V2 Yeezreel', 3900000, 'yeezy-boost-350-v2-yeezreel-39', 39, 100, '', 1, 1),
(269, 'Yeezy Boost 350 V2 Yeezreel', 3900000, 'yeezy-boost-350-v2-yeezreel-40', 40, 100, '', 1, 1),
(270, 'Yeezy Boost 350 V2 Yeezreel', 3900000, 'yeezy-boost-350-v2-yeezreel-41', 41, 100, '', 1, 1),
(271, 'Yeezy Boost 350 V2 Yeezreel', 3900000, 'yeezy-boost-350-v2-yeezreel-42', 42, 100, '', 1, 1),
(272, 'Yeezy Boost 350 V2 Yeezreel', 3900000, 'yeezy-boost-350-v2-yeezreel-43', 43, 100, '', 1, 1),
(273, 'Yeezy Boost 700 Inertia', 4200000, 'yeezy-boost-700-inertia-36', 36, 100, '', 1, 1),
(274, 'Yeezy Boost 700 Inertia', 4200000, 'yeezy-boost-700-inertia-37', 37, 100, '', 1, 1),
(275, 'Yeezy Boost 700 Inertia', 4200000, 'yeezy-boost-700-inertia-38', 38, 100, '', 1, 1),
(276, 'Yeezy Boost 700 Inertia', 4200000, 'yeezy-boost-700-inertia-39', 39, 100, '', 1, 1),
(277, 'Yeezy Boost 700 Inertia', 4200000, 'yeezy-boost-700-inertia-40', 40, 100, '', 1, 1),
(278, 'Yeezy Boost 700 Inertia', 4200000, 'yeezy-boost-700-inertia-41', 41, 100, '', 1, 1),
(279, 'Yeezy Boost 700 Inertia', 4200000, 'yeezy-boost-700-inertia-43', 43, 100, '', 1, 1),
(280, 'Yeezy Boost 700 Inertia', 4200000, 'yeezy-boost-700-inertia-42', 42, 100, '', 1, 1),
(281, 'Yeezy Boost 350 V2 Dazzling Blue', 3200000, 'yeezy-boost-350-v2-dazzling-36', 36, 100, '', 1, 1),
(282, 'Yeezy Boost 350 V2 Dazzling Blue', 3200000, 'yeezy-boost-350-v2-dazzling-37', 37, 100, '', 1, 1),
(283, 'Yeezy Boost 350 V2 Dazzling Blue', 3200000, 'yeezy-boost-350-v2-dazzling-38', 38, 100, '', 1, 1),
(284, 'Yeezy Boost 350 V2 Dazzling Blue', 3200000, 'yeezy-boost-350-v2-dazzling-39', 39, 100, '', 1, 1),
(285, 'Yeezy Boost 350 V2 Dazzling Blue', 3200000, 'yeezy-boost-350-v2-dazzling-40', 40, 100, '', 1, 1),
(286, 'Yeezy Boost 350 V2 Dazzling Blue', 3200000, 'yeezy-boost-350-v2-dazzling-41', 41, 100, '', 1, 1),
(287, 'Yeezy Boost 350 V2 Dazzling Blue', 3200000, 'yeezy-boost-350-v2-dazzling-43', 43, 100, '', 1, 1),
(288, 'Yeezy Boost 350 V2 Dazzling Blue', 3200000, 'yeezy-boost-350-v2-dazzling-42', 42, 100, '', 1, 1);