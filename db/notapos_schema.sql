/* DROP DATABASE IF EXISTS pos_db; */

CREATE DATABASE pos_db;

USE pos_db;

CREATE TABLE pos_db.employee_role (
    employee_role_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    roleName varchar(255) NOT NULL -- Front of House
    -- -- runner (just an idea)
    -- -- host (just an idea)
    -- -- waitstaff (just an idea)
    -- Back of House
    -- Manager
    -- Owner
);

CREATE TABLE employees (
    employee_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstName varchar(255) NOT NULL,
    lastName varchar(255) NOT NULL,
    pin int,
    clocked_in BOOLEAN NOT NULL DEFAULT 0,
    -- similar to IsAuthenticated concept
    address varchar(255),
    city varchar(255),
    phone varchar(255),
    roleID int NOT NULL,
    FOREIGN KEY (roleID) REFERENCES employee_role(employee_role_id) 
    -- fk -->employee_role
);

CREATE TABLE categories (
    categories_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category_name varchar(255) NOT NULL 
    -- Starters
    -- Mains
    -- Dessert
    -- Drinks
);

CREATE TABLE menu (
    menu_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    itemName varchar(255) NOT NULL,
    categoryID int,
    FOREIGN KEY (categoryID) REFERENCES categories(categories_id),
    -- fk -->categories 
    price decimal(13, 2) NOT NULL,
    price int(255),
    item_description varchar(255)
);

CREATE TABLE `Order` (
    orderID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    employeeID int NOT NULL,
    FOREIGN KEY (employeeID) REFERENCES employees(employee_id),
    -- fk -->employees 
    orderDtTm DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    subtotal decimal(13, 2),
    total decimal(13, 2)
);

CREATE TABLE OrderItems (
    ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    orderID int NOT NULL,
    FOREIGN KEY (orderID) REFERENCES `Order`(orderID),
    menuID int NOT NULL,
    FOREIGN KEY (menuID) REFERENCES menu(menu_id),
    ItemName varchar(255) not null
);