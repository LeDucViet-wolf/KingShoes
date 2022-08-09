create database KingShoes_DB;

use KingShoes_DB;

create table tblCustomer
(
	entity_id int auto_increment primary key,
	first_name varchar(256),
	last_name varchar(256),
	birthday date,
	gender int(11) default(1),
	email varchar(256),
	phone varchar(256),
	password varchar(256),
	address varchar(256),
	status int(11) default(1)
);

create table tblCategory
(
    entity_id int auto_increment primary key,
    `name` varchar(256),
    `image` varchar(256),
    `status` int(11) default(1)
);

create table tblProduct
(
    entity_id int auto_increment primary key,
    `name` varchar(256),
    price float,
    sku varchar(256),
    `size` int,
    quantity int default(0),
	`description` varchar(256),
    `status` int(11) default(1),
	category_id int,
	foreign key (category_id) references tblCategory(entity_id)
);

create table tblProductImage
(
    entity_id int auto_increment primary key,
	product_id int,
	`value` varchar(256),
	foreign key (product_id) references tblProduct(entity_id)
);

create table tblCategoryImage
(
    entity_id int auto_increment primary key,
	category_id int,
	`value` varchar(256),
	foreign key (product_id) references tblCategory(entity_id)
);


create table tblRelatedProduct
(
	entity_id int auto_increment primary key,
	product_id int,
	related_product_id varchar(256),
	foreign key (product_id) references tblProduct(entity_id)
);

create table tblProductReview
(
	entity_id int auto_increment primary key,
	product_id int,
	customer_id int,
	`comment` varchar(256),
	point int,
	foreign key (product_id) references tblProduct(entity_id),
	foreign key (customer_id) references tblCustomer(entity_id)
);

create table tblQuote
(
	entity_id int auto_increment primary key,
	customer_id int,
	is_paid int(11) default(1),
	foreign key (customer_id) references tblCustomer(entity_id)
);

create table tblQuoteItem
(
 	entity_id int auto_increment primary key,
	quote_id int,
	product_id int,
	quantity int,
	row_total float,
	foreign key (quote_id) references tblQuote(entity_id),
	foreign key (product_id) references tblProduct(entity_id)
);

create table tblShippingMethod
(
 	entity_id int auto_increment primary key,
	name varchar(256),
	price float,
	code varchar(256),
	status int(11) default(1)
);

create table tblPaymentMethod
(
	entity_id int auto_increment primary key,
	name varchar(256),
	code varchar(256),
	status int(11) default(1)
);

create table tblOrder
(
	entity_id int auto_increment primary key,
	status int(11) default(1),
	shipping_id int,
	payment_id int,
	grand_total float,
	note varchar(256),
	foreign key (shipping_id) references tblShippingMethod(entity_id),
	foreign key (payment_id) references tblPaymentMethod(entity_id)
);

create table tblOrderItem
(
	entity_id int auto_increment primary key,
	order_id int,
	product_id int,
	quantity int,
	row_total float,
	foreign key (order_id) references tblOrder(entity_id),
	foreign key (product_id) references tblProduct(entity_id)
);

create table tblCustomerPoint
(
	entity_id int auto_increment primary key,
	customer_id int,
	`value` int,
	foreign key (customer_id) references tblCustomer(entity_id)
);

create table tblProductPoint
(
	entity_id int auto_increment primary key,
	product_id int,
	`value` varchar(256),
	foreign key (product_id) references tblProduct(entity_id)
);

create table tblRole
(
	entity_id int auto_increment primary key,
	name varchar(256),
	`resource` varchar(256),
	is_admin int
);

create table tblUser
(
	entity_id int auto_increment primary key,
	first_name varchar(256),
	last_name varchar(256),
	`account` varchar(256),
	`password` varchar(256),
	`image` varchar(256),
	role_id int,
	foreign key (role_id) references tblRole(entity_id)
);