-- insert table categories
INSERT INTO categories (`name`) 
VALUES ('Peralatan Mandi', "Mie Instant", 'Olahan Daging');

-- insert table products
INSERT INTO products (`name`, categories_id) 
VALUES ('Sampo', 1), ('Sikat Gigi', 1), ('Indomi', 2), ('Mie sedap', 2), ('Nuget', 3);
