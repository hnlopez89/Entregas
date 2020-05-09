USE entrega_zona_azul;
SET FOREIGN_KEY_CHECKS = 0;


CREATE TABLE customer (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(50),
surname VARCHAR(50),
dni VARCHAR(9),
telephone_number VARCHAR(20),
bank_account VARCHAR(50),
email_address VARCHAR(50)
);

CREATE TABLE car (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
label VARCHAR(8),
brand VARCHAR(20),
model VARCHAR(20),
type ENUM ('COCHE', 'MOTO', 'FURGONETA'),
id_customer INT UNSIGNED,
FOREIGN KEY (id_customer) REFERENCES customer (id)
);

CREATE TABLE parking(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
check_in_time DATETIME,
check_out_time DATETIME,
elapsed_time TIME,
penalty VARCHAR(4),
id_customer INT UNSIGNED,
FOREIGN KEY (id_customer) REFERENCES customer (id)
);

CREATE TABLE parking_place(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
neighbourhood VARCHAR(50),
opening_time DATETIME,
closing_time DATETIME,
rate DECIMAL(4,2),
time_limit TIME,
opened BOOLEAN,
notes VARCHAR(200),
id_parking INT UNSIGNED,
FOREIGN KEY (id_parking) REFERENCES parking (id)
);

CREATE TABLE car_parking_place_parking (
id_car INT UNSIGNED,
FOREIGN KEY (id_car) REFERENCES car (id),
id_parking_place INT UNSIGNED,
FOREIGN KEY (id_parking_place) REFERENCES parking_place (id),
id_parking INT UNSIGNED,
FOREIGN KEY (id_parking) REFERENCES parking (id),
PRIMARY KEY (id_car, id_parking_place, id_parking)
);

SET FOREIGN_KEY_CHECKS = 1;