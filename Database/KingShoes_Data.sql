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

insert into tblCategory(`name`, `image`, `status`) values
('Nike', 'nike.png', 1),
('Adidas', 'adidas.png', 1),
('Jordan', 'jordan.png', 1),
('Yeezy', 'yeezy', 1);

insert into tblProduct(`name`, `price`, `sku`, `size`, `quantity`, `description`, `status`, `category_id`) values
('Air Force 1', 3300000, 'air-force-1-38', 38, 100, '', 1, 1),
('Air Force 1', 3300000, 'air-force-1-39', 39, 100, '', 1, 1),
('Air Force 1', 3300000, 'air-force-1-40', 40, 100, '', 1, 1),
('Air Force 1', 3300000, 'air-force-1-41', 41, 100, '', 1, 1),
('Air Force 1', 3300000, 'air-force-1-42', 42, 100, '', 1, 1),

('Air Max Terrascape 90', 3600000, 'air-max-terrascape-90-38', 38, 100, '', 1, 2),
('Air Max Terrascape 90', 3600000, 'air-max-terrascape-90-39', 39, 100, '', 1, 2),
('Air Max Terrascape 90', 3600000, 'air-max-terrascape-90-40', 40, 100, '', 1, 2),
('Air Max Terrascape 90', 3600000, 'air-max-terrascape-90-41', 41, 100, '', 1, 2),
('Air Max Terrascape 90', 3600000, 'air-max-terrascape-90-42', 42, 100, '', 1, 2),

('Free Run 2', 2900000, 'free-run-2-38', 38, 100, '', 1, 3),
('Free Run 2', 2900000, 'free-run-2-39', 39, 100, '', 1, 3),
('Free Run 2', 2900000, 'free-run-2-40', 40, 100, '', 1, 3),
('Free Run 2', 2900000, 'free-run-2-41', 41, 100, '', 1, 3),
('Free Run 2', 2900000, 'free-run-2-42', 42, 100, '', 1, 3),

('Air Max AP', 3200000, 'air-max-ap-38', 38, 100, '', 1, 4),
('Air Max AP', 3200000, 'air-max-ap-39', 39, 100, '', 1, 4),
('Air Max AP', 3200000, 'air-max-ap-40', 40, 100, '', 1, 4),
('Air Max AP', 3200000, 'air-max-ap-41', 41, 100, '', 1, 4),
('Air Max AP', 3200000, 'air-max-ap-42', 42, 100, '', 1, 4),

('Pegasus 38', 3800000, 'pegasus-38', 38, 100, '', 1, 5),
('Pegasus 38', 3800000, 'pegasus-39', 39, 100, '', 1, 5),
('Pegasus 38', 3800000, 'pegasus-40', 40, 100, '', 1, 5),
('Pegasus 38', 3800000, 'pegasus-41', 41, 100, '', 1, 5),
('Pegasus 38', 3800000, 'pegasus-42', 42, 100, '', 1, 5),

('Court Legacy', 2200000, 'count-legacy-38', 38, 100, '', 1, 6),
('Court Legacy', 2200000, 'count-legacy-39', 39, 100, '', 1, 6),
('Court Legacy', 2200000, 'count-legacy-40', 40, 100, '', 1, 6),
('Court Legacy', 2200000, 'count-legacy-41', 41, 100, '', 1, 6),
('Court Legacy', 2200000, 'count-legacy-42', 42, 100, '', 1, 6),

('Zoom X Invicible', 3900000, 'zoom-x-invicible-38', 38, 100, '', 1, 7),
('Zoom X Invicible', 3900000, 'zoom-x-invicible-39', 39, 100, '', 1, 7),
('Zoom X Invicible', 3900000, 'zoom-x-invicible-40', 40, 100, '', 1, 7),
('Zoom X Invicible', 3900000, 'zoom-x-invicible-41', 41, 100, '', 1, 7),
('Zoom X Invicible', 3900000, 'zoom-x-invicible-42', 42, 100, '', 1, 7),

('Air Max 97', 4200000, 'air-max-97-38', 38, 100, '', 1, 8),
('Air Max 97', 4200000, 'air-max-97-39', 39, 100, '', 1, 8),
('Air Max 97', 4200000, 'air-max-97-40', 40, 100, '', 1, 8),
('Air Max 97', 4200000, 'air-max-97-41', 41, 100, '', 1, 8),
('Air Max 97', 4200000, 'air-max-97-42', 42, 100, '', 1, 8),

('Air Zoom Pegasus 38', 3200000, 'air-zoom-pegasus-38-38', 38, 100, '', 1, 9),
('Air Zoom Pegasus 38', 3200000, 'air-zoom-pegasus-38-39', 39, 100, '', 1, 9),
('Air Zoom Pegasus 38', 3200000, 'air-zoom-pegasus-38-40', 40, 100, '', 1, 9),
('Air Zoom Pegasus 38', 3200000, 'air-zoom-pegasus-38-41', 41, 100, '', 1, 9),
('Air Zoom Pegasus 38', 3200000, 'air-zoom-pegasus-38-42', 42, 100, '', 1, 9),

('EQ21', 2600000, 'eq21-38', 38, 100, '', 1, 10),
('EQ21', 2600000, 'eq21-39', 39, 100, '', 1, 10),
('EQ21', 2600000, 'eq21-40', 40, 100, '', 1, 10),
('EQ21', 2600000, 'eq21-41', 41, 100, '', 1, 10),
('EQ21', 2600000, 'eq21-42', 42, 100, '', 1, 10),

('ZX 2K Boost', 3600000, 'zx-2k-boost-38', 38, 100, '', 1, 11),
('ZX 2K Boost', 3600000, 'zx-2k-boost-39', 39, 100, '', 1, 11),
('ZX 2K Boost', 3600000, 'zx-2k-boost-40', 40, 100, '', 1, 11),
('ZX 2K Boost', 3600000, 'zx-2k-boost-41', 41, 100, '', 1, 11),
('ZX 2K Boost', 3600000, 'zx-2k-boost-42', 42, 100, '', 1, 11),

('Forumn Low Green', 2900000, 'forumn-low-green-38', 38, 100, '', 1, 12),
('Forumn Low Green', 2900000, 'forumn-low-green-39', 39, 100, '', 1, 12),
('Forumn Low Green', 2900000, 'forumn-low-green-40', 40, 100, '', 1, 12),
('Forumn Low Green', 2900000, 'forumn-low-green-41', 41, 100, '', 1, 12),
('Forumn Low Green', 2900000, 'forumn-low-green-42', 42, 100, '', 1, 12),

('Ultraboost 20 Cloud White', 3200000, 'ultraboost-20-cloud-white-38', 38, 100, '', 1, 13),
('Ultraboost 20 Cloud White', 3200000, 'ultraboost-20-cloud-white-39', 39, 100, '', 1, 13),
('Ultraboost 20 Cloud White', 3200000, 'ultraboost-20-cloud-white-40', 40, 100, '', 1, 13),
('Ultraboost 20 Cloud White', 3200000, 'ultraboost-20-cloud-white-41', 41, 100, '', 1, 13),
('Ultraboost 20 Cloud White', 3200000, 'ultraboost-20-cloud-white-42', 42, 100, '', 1, 13),

('Ultraboost 20 Tech Purple', 3800000, 'ultraboost-20-tech-purple-38', 38, 100, '', 1, 14),
('Ultraboost 20 Tech Purple', 3800000, 'ultraboost-20-tech-purple-39', 39, 100, '', 1, 14),
('Ultraboost 20 Tech Purple', 3800000, 'ultraboost-20-tech-purple-40', 40, 100, '', 1, 14),
('Ultraboost 20 Tech Purple', 3800000, 'ultraboost-20-tech-purple-41', 41, 100, '', 1, 14),
('Ultraboost 20 Tech Purple', 3800000, 'ultraboost-20-tech-purple-42', 42, 100, '', 1, 14),

('Forumn Low Blue', 2200000, 'forumn-low-blue-38', 38, 100, '', 1, 15),
('Forumn Low Blue', 2200000, 'forumn-low-blue-39', 39, 100, '', 1, 15),
('Forumn Low Blue', 2200000, 'forumn-low-blue-40', 40, 100, '', 1, 15),
('Forumn Low Blue', 2200000, 'forumn-low-blue-41', 41, 100, '', 1, 15),
('Forumn Low Blue', 2200000, 'forumn-low-blue-42', 42, 100, '', 1, 15),

('Continental 80', 3900000, 'continental-80-38', 38, 100, '', 1, 16),
('Continental 80', 3900000, 'continental-80-39', 39, 100, '', 1, 16),
('Continental 80', 3900000, 'continental-80-40', 40, 100, '', 1, 16),
('Continental 80', 3900000, 'continental-80-41', 41, 100, '', 1, 16),
('Continental 80', 3900000, 'continental-80-42', 42, 100, '', 1, 16),

('Superstar', 4200000, 'superstar-38', 38, 100, '', 1, 17),
('Superstar', 4200000, 'superstar-39', 39, 100, '', 1, 17),
('Superstar', 4200000, 'superstar-40', 40, 100, '', 1, 17),
('Superstar', 4200000, 'superstar-41', 41, 100, '', 1, 17),
('Superstar', 4200000, 'superstar-42', 42, 100, '', 1, 17),

('Supergrip', 3200000, 'supergrip-38-38', 38, 100, '', 1, 18),
('Supergrip', 3200000, 'supergrip-38-39', 39, 100, '', 1, 18),
('Supergrip', 3200000, 'supergrip-38-40', 40, 100, '', 1, 18),
('Supergrip', 3200000, 'supergrip-38-41', 41, 100, '', 1, 18),
('Supergrip', 3200000, 'supergrip-38-42', 42, 100, '', 1, 18),

('Jordan MA2', 2600000, 'jordan-ma2-38', 38, 100, '', 1, 19),
('Jordan MA2', 2600000, 'jordan-ma2-39', 39, 100, '', 1, 19),
('Jordan MA2', 2600000, 'jordan-ma2-40', 40, 100, '', 1, 19),
('Jordan MA2', 2600000, 'jordan-ma2-41', 41, 100, '', 1, 19),
('Jordan MA2', 2600000, 'jordan-ma2-42', 42, 100, '', 1, 19),

('Jordan Series ES', 3600000, 'jordanseries-es-38', 38, 100, '', 1, 20),
('Jordan Series ES', 3600000, 'jordanseries-es-39', 39, 100, '', 1, 20),
('Jordan Series ES', 3600000, 'jordanseries-es-40', 40, 100, '', 1, 20),
('Jordan Series ES', 3600000, 'jordanseries-es-41', 41, 100, '', 1, 20),
('Jordan Series ES', 3600000, 'jordanseries-es-42', 42, 100, '', 1, 20);

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

insert into tblCategoryImage(`category_id`, `value`) values
();

insert into tblProductImage(`product_id`,`value`) values
();

insert into tblProductPoint(`product_id`,`value`) values
();

insert into tblRelatedProduct(`product_id`,`related_product_id`) values
();

insert into tblOrder(`status`, `shipping_id`,`payment_id`,`grand_total`,`note`) values
();

insert into tblOrderItem(`order_id`,`product_id`,`quantity`,`row_total`) values
();