create database baked_bloom;
USE baked_bloom;
CREATE TABLE items (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL DEFAULT 0,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
insert into items (item_name,description,price,quantity,image_url)
values ('Cinnamon rolls',"fluffy rolls are swirled with a sweet cinnamon filling and topped with a luscious cream cheese frosting.",80.00,12,'img/image (14).png');
update items
set description = "fluffy rolls with a sweet cinnamon
                    filling and topped with a  
                    cream cheese frosting."
where item_id = 12;
select * from cart;
create table cart (
cart_id int auto_increment primary key,
item_id int,
quantity int,
foreign key (item_id) references items (item_id)
);


