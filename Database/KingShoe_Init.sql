create database KingShoe_DB;

use KingShoe_DB;

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
	category_id int
);

create table tblProductImage
(
    entity_id int auto_increment primary key,
	product_id int,
	`value` varchar(256)
);

create table tblRelatedProduct
(
	entity_id int auto_increment primary key,
	product_id int,
	related_product_id varchar(256)
);

create table tblProductReview
(
	entity_id int auto_increment primary key,
	product_id int,
	customer_id int,
	`comment` varchar(256),
	point int
);

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

create table tblQuote
(
	entity_id int auto_increment primary key,
	customer_id int,
	is_paid int(11) default(1)
);

create table tblQuoteItem
(
 	entity_id int auto_increment primary key,
	quote_id int,
	product_id int,
	quantity int,
	row_total float
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
	note varchar(256)
);

create table tblOrderItem
(
	entity_id int auto_increment primary key,
	order_id int,
	product_id int,
	quantity int,
	row_total float
);

create table tblCustomerPoint
(
	entity_id int auto_increment primary key,
	customer_id int,
	`value` varchar(256)
);

create table tblProductPoint
(
	entity_id int auto_increment primary key,
	product_id int,
	`value` varchar(256)
);

create table tblUser
(
	entity_id int auto_increment primary key,
	first_name varchar(256),
	last_name varchar(256),
	`account` varchar(256),
	`password` varchar(256),
	`image` varchar(256),
	role_id int
);

create table tblRole
(
	entity_id int auto_increment primary key,
	name varchar(256),
	`resource` varchar(256)
);