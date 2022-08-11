insert into
    tblRole(`name`, `resource`, `is_admin`)
values
    ('Admin', '', 1),
    ('Vendor', '', 2);

insert into
    tblUser(
        `first_name`,
        `last_name`,
        `account`,
        `password`,
        `image`,
        `role_id`
    )
values
    (
        'Lê Đức',
        'Việt',
        'leducviet',
        'admin.123',
        '',
        2
    ),
    (
        'Hoàng Cao',
        'Long',
        'hoangcaolong',
        'admin.123',
        '',
        2
    ),
    (
        'Đặng Tuấn',
        'Đạt',
        'dangtuandat',
        'admin.123',
        '',
        1
    );

insert into
    tblShippingMethod(`name`, `price`, `code`, `status`)
values
    ('Free Shipping', 0, 'FSP', 1),
    ('Domestic Express Delivery', 100000, 'DED', 1),
    ('Express Delivery Abroad', 200000, 'EDA', 2);

insert into
    tblPaymentMethod(`name`, `code`, `status`)
values
    ('Cash On Delivery', 'COD', 1);

insert into
    tblCategory(`name`, `image`, `status`)
values
    ('Nike', 'nike.jpg', 1),
    ('Adidas', 'adidas.jpg', 1),
    ('Jordan', 'jordan.jpg', 1),
    ('Yeezy', 'yeezy.jpg', 1);

insert into
    tblProduct(
        `entity_id`,
        `name`,
        `price`,
        `sku`,
        `description`,
        `status`,
        `category_id`
    )
values
    (
        1,
        'AIR FORCE 1',
        3300000,
        'CW2288-111',
        '<p>Nike Air Force 1 Ra mắt vào năm 1982 bởi nhà thiết kế Bruce Kilgore, ngay lập tức mẫu giày Nike Air Force 1 (AF1) đã trở thành một ‘hit’ mạnh trên khắp thế giới khi ‘sold out’ ngay trong ngày đầu trình làng.</p>
<p>Thiết kế mẫu giày Nike Air Force 1 được xem là đôi giày mang tính cách mạng trong thế giới sneaker, khi mà các nhà thiết kế kết hợp với các nhà khoa học cho ra mẫu giày có công nghệ ‘Air’ – một túi khí ở gót chân để đệm hỗ trợ.</p>
<p>Cái tên ‘Air Force One’ được lấy ý tưởng từ chiếc chuyên cơ cùng tên chuyên dùng chở tổng thống Mỹ. AF1 có 3 hình thức chính: low (thấp) – mid (trung) – top (cao). Với các style Mid – Top, chúng ta dễ dàng nhận thấy một cọng dây đeo có khoá hoặc dán tạo vẻ chắc chắn cho đôi giày và có thể dịch chuyển theo tuỳ phiên bản. Đây là một sự đặc biệt của đôi giày Nike Air Force 1 so với các đôi giày khác cùng thời. Một điểm nhận dạng khác của các Nike Air Force 1 là một huy hiệu nhỏ ở giữa dây giày được làm bằng thiếc (có phiên bản được làm bằng nhựa hoặc bạc) có khắc dòng chữ ‘AF1’.</p>',
        1,
        1
    ),
    (
        2,
        'AIR MAX TERRASCAPE 90',
        3600000,
        'DC9450-100',
        '',
        1,
        2
    ),
    (3, 'FREE RUN 2', 2900000, 'DM8915-600', '', 1, 3),
    (4, 'AIR MAX AP', 3200000, 'CU4870-104', '', 1, 4),
    (
        5,
        'ZOOM PEGASUS 38',
        3200000,
        'CW7358-104',
        '',
        1,
        1
    ),
    (
        6,
        'COURT LEGACY',
        2200000,
        'DA5380-102',
        '',
        1,
        2
    ),
    (
        7,
        'ZOOM X INVICIBLE',
        3900000,
        'CT2229-102',
        '',
        1,
        3
    ),
    (8, 'AIR MAX 97', 4200000, 'DJ5434-400', '', 1, 4),
    (
        9,
        'AIR ZOOM PEGASUS 38',
        3200000,
        'CW7358-106',
        '',
        1,
        1
    ),
    (10, 'EQ21', 2600000, 'GZ4082', '', 1, 2),
    (11, 'ZX 2K BOOST', 2900000, 'FV9997', '', 1, 3),
    (
        12,
        'FORUM LOW GREEN',
        2900000,
        'GY8556',
        '',
        1,
        4
    ),
    (
        13,
        'ULTRABOOST 20 CLOUD WHITE',
        3200000,
        'FV8336',
        '',
        1,
        1
    ),
    (
        14,
        'ULTRABOOST 20 TECH PURPLE',
        3800000,
        'EG0718',
        '',
        1,
        2
    ),
    (
        15,
        'FORUM LOW BLUE',
        2200000,
        'FY7756',
        '',
        1,
        3
    ),
    (
        16,
        'CONTINENTAL 80',
        3900000,
        'FY5469',
        '',
        1,
        4
    ),
    (17, 'SUPERSTAR', 4200000, 'EG4958', '', 1, 1),
    (18, 'SUPERGRIP', 3200000, 'FW5171', '', 1, 2),
    (
        19,
        'JORDAN MA2',
        2600000,
        'CV8122-003',
        '',
        1,
        3
    ),
    (
        20,
        'JORDAN SERIES ES',
        3600000,
        'DN1857-610',
        '',
        1,
        4
    );

insert into
    tblProductSize(`product_id`, `value`, `quantity`)
values
    (1, 40, 100),
    (1, 41, 100),
    (1, 42, 100),
    (1, 43, 100),
    (1, 44, 100),
    (2, 37, 100),
    (2, 38, 100),
    (2, 39, 100),
    (3, 36, 100),
    (3, 37, 100),
    (4, 36, 100),
    (4, 37, 100),
    (4, 39, 100),
    (5, 37, 100),
    (5, 38, 100),
    (6, 35, 100),
    (6, 36, 100),
    (7, 37, 100),
    (8, 36, 100),
    (8, 37, 100),
    (8, 38, 100),
    (9, 36, 100),
    (9, 38, 100),
    (9, 39, 100),
    (9, 40, 100),
    (10, 40, 100),
    (10, 41, 100),
    (10, 42, 100),
    (10, 43, 100),
    (10, 44, 100),
    (11, 42, 100),
    (11, 43, 100),
    (12, 41, 100),
    (12, 42, 100),
    (12, 43, 100),
    (13, 36, 100),
    (13, 37, 100),
    (13, 38, 100),
    (13, 39, 100),
    (13, 40, 100),
    (14, 37, 100),
    (15, 42, 100),
    (15, 43, 100),
    (16, 38, 100),
    (17, 37, 100),
    (17, 40, 100),
    (17, 41, 100),
    (18, 38, 100),
    (19, 41, 100),
    (19, 42, 100),
    (19, 43, 100),
    (20, 37, 100),
    (20, 39, 100),
    (20, 40, 100);

-- insert into 
	-- tblProductImage(`product_id`,`value`) 
-- values
	-- ();
	
insert into 
	tblProductPoint(`product_id`,`value`) 
values
	(1,10),
	(2,20),
	(3,30),
	(4,40),
	(5,50),
	(6,60),
	(7,70),
	(8,80),
	(9,90),
	(10,100),
	(11,110),
	(12,120),
	(13,130),
	(14,140),
	(15,150),
	(16,160),
	(17,170),
	(18,180),
	(19,190),
	(20,200);

insert into
    tblRelatedProduct(`product_id`, `related_product_id`)
values
    (1, 2),
    (1, 3),
    (1, 4),
    (1, 5),
	(2, 1),
	(2, 3),
	(2, 4),
	(2, 5),
    (3, 2),
    (3, 4),
    (3, 5),
    (3, 6),
    (4, 2),
    (4, 3),
    (4, 5),
    (4, 6),
    (5, 1),
    (5, 2),
    (5, 3),
    (5, 4),
    (6, 4),
    (6, 5),
    (6, 7),
    (6, 8),
    (7, 5),
    (7, 6),
    (7, 8),
    (7, 9),
    (8, 6),
    (8, 7),
    (8, 9),
    (8, 10),
    (9, 1),
    (9, 3),
    (9, 4),
    (9, 5),
    (10, 1),
    (10, 3),
    (10, 4),
    (10, 5),
    (11, 1),
    (11, 3),
    (11, 4),
    (11, 5),
    (12, 1),
    (12, 3),
    (12, 4),
    (12, 5),
    (13, 1),
    (13, 3),
    (13, 4),
    (13, 5),
    (14, 1),
    (14, 3),
    (14, 4),
    (14, 5),
    (15, 1),
    (15, 3),
    (15, 4),
    (15, 5),
    (16, 1),
    (16, 3),
    (16, 4),
    (16, 5),
    (17, 1),
    (17, 3),
    (17, 4),
    (17, 5),
    (18, 1),
    (18, 3),
    (18, 4),
    (18, 5),
    (19, 1),
    (19, 3),
    (19, 4),
    (19, 5),
    (20, 1),
    (20, 3),
    (20, 4),
    (20, 5);

insert into
    tblCustomer(
        `first_name`,
        `last_name`,
        `birthday`,
        `gender`,
        `email`,
        `phone`,
        `password`,
        `address`,
        `status`
    )
values
    (
        'Nguyễn Ngọc',
        'Thúy',
        '1990-11-23',
        0,
        'nguyenngocthuy@gmail.com',
        '0832536199',
        '123',
        'Khu tập thể A3 Nam Đồng, A1P49, Phố P. Hồ Đắc Di, Nam Đồng, Đống Đa, Hà Nội',
        1
    ),
    (
        'Đáo Đức',
        'Thành',
        '1991-11-23',
        1,
        'daoducthanh@gmail.com',
        '0832536200',
        '123',
        'Tòa nhà C´Land, 156 Ng. Xã Đàn 2, Nam Đồng, Đống Đa, Hà Nội',
        0
    ),
    (
        'Tô',
        'Nghị',
        '1992-11-23',
        0,
        'tonghi@gmail.com',
        '0832536201',
        '123',
        'Trần Hưng Đạo, Hoàn Kiếm, Hà Nội',
        1
    ),
    (
        'Nguyễn Lê',
        'Tuấn',
        '1993-11-23',
        1,
        'nguyenletuan@gmail.com',
        '0832536202',
        '123',
        '81 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội',
        0
    ),
    (
        'Trần Thị',
        'Thu',
        '1994-11-23',
        0,
        'tranthithu@gmail.com',
        '0832536203',
        '123',
        '6 Ng. 84 P. Trần Quang Diệu, Chợ Dừa, Đống Đa, Hà Nội',
        1
    ),
    (
        'Phạm Duy',
        'Hồng',
        '1995-11-23',
        1,
        'phamduyhong@gmail.com',
        '0832536204',
        '123',
        '65 Nguyễn Đình Thi, Thuỵ Khuê, Tây Hồ, Hà Nội',
        0
    ),
    (
        'Lê Hồng',
        'Nguyên',
        '1996-11-23',
        0,
        'lehongnguyen@gmail.com',
        '0832536205',
        '123',
        '51 Đ. Âu Cơ, Tứ Liên, Tây Hồ, Hà Nội',
        1
    ),
    (
        'Hồ Cung Đạt',
        'Nhân',
        '1997-11-23',
        1,
        'hocungdatnhan@gmail.com',
        '0832536206',
        '123',
        'Hàng Bột, Đống Đa, Hà Nội',
        0
    ),
    (
        'Chu Văn',
        'Nam',
        '1998-11-23',
        0,
        'chuvannam@gmail.com',
        '0832536207',
        '123',
        '9b Nguyễn Đình Thi, Thuỵ Khuê, Tây Hồ, Hà Nội',
        1
    ),
    (
        'Huỳnh Đức',
        'Long',
        '1999-11-23',
        1,
        'huynhduclong@gmail.com',
        '0832536208',
        '123',
        '88 P.Yên Lãng, Láng Hạ, Đống Đa, Trung Hoà Cầu Giấy Hà Nội',
        0
    );

insert into
    tblProductReview(`product_id`, `customer_id`, `comment`, `point`)
values
    (1, 1, 'Tuyệt vời', 10),
    (2, 2, 'Tuyệt vời', 20),
    (3, 3, 'Tuyệt vời', 30),
    (4, 4, 'Tuyệt vời', 40),
    (5, 5, 'Tuyệt vời', 50),
    (6, 6, 'Tuyệt vời', 60),
    (7, 7, 'Tuyệt vời', 70),
    (8, 8, 'Tuyệt vời', 80),
    (9, 9, 'Tuyệt vời', 90),
    (10, 10, 'Tuyệt vời', 10);

insert into
    tblQuote(`customer_id`, `is_paid`)
values
    (1, 1),
    (2, 0),
    (3, 1),
    (4, 0),
    (5, 1),
    (6, 0),
    (7, 1),
    (8, 0),
    (9, 1),
    (10, 0);

insert into
    tblQuoteItem(
        `quote_id`,
        `product_id`,
        `quantity`,
        `row_total`
    )
values
    (1, 1, 1000, 10000),
    (2, 2, 2000, 20000),
    (3, 3, 3000, 30000),
    (4, 4, 4000, 40000),
    (5, 5, 5000, 50000),
    (6, 6, 6000, 60000),
    (7, 7, 7000, 70000),
    (8, 8, 8000, 80000),
    (9, 9, 9000, 90000),
    (10, 10, 10000, 100000);

insert into
    tblCustomerPoint(`customer_id`, `value`)
values
    (1, 10),
    (2, 20),
    (3, 30),
    (4, 40),
    (5, 50),
    (6, 60),
    (7, 70),
    (8, 80),
    (9, 90),
    (10, 100);

insert into 
	tblOrder(`status`, `shipping_id`,`payment_id`,`grand_total`,`note`) 
values
	(1,1,1,1000,'hello');
	
insert into 
	tblOrderItem(`order_id`,`product_id`,`quantity`,`row_total`) 
values
	(1,1,1000,1000);