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