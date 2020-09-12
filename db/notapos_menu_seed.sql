INSERT INTO `pos_db`.`menu`
(`itemName`,
 `categoryID`,
 `price`,
 `item_description`,
 `createdAt`,
 `updatedAt`
)
VALUES
 ('Fries',1,4.99,'Hand cut, crispy, and delicious', now(), now())
,('Onion Rings',1,5.99,'Slim rings in a crispy seasoned shell', now(), now()) 
,('Cheese Curds',1,6.99,'Squeaky, gooey, and oh-so-good', now(), now()) 
,('Sampler Platter',1,7.99,'All three of our can''t miss appetizers', now(), now())  
,('Hamburger',2,9.99,'An American Classic, unadorned', now(), now())
,('Cheeseburger',2,10.99,'An American Classic with American cheese', now(), now())
,('Hamburger Deluxe',2,11.99,'An American Classic with extra toppings', now(), now())
,('Cheeseburger Deluxe',2,12.99,'An Cheesy Classic with everything on it', now(), now())
,('Sundae',3,7.99,'Ice cream and a choice of topping', now(), now())
,('Banana Split',3,7.99,'A classic dessert, made healthy with fruit!', now(), now())
,('Chocolate Parfait ',3,7.99,'Nothing healthy about hot fudge, peanuts, and ice cream', now(), now())
,('Triple Cone',3,7.99,'Can''t spell HUGE without hug -- what it feels like to eat this much ice cream', now(), now())
,('Pop',4,2.99,'Pop, Soda, Soda-Pop -- whatever you call it, it''s got bubbles', now(), now())
,('Beer',4,4.99,'Nectar of the gods', now(), now())
,('Wine',4,4.99,'Not from a box, but this isn''t fancy', now(), now())
,('Juice',4,0.99,'Hand squeezed from the bottles we got from the factory', now(), now())
;

INSERT INTO `pos_db`.`categories`
(
`category_name`,
`createdAt`,
`updatedAt`
)
VALUES
 ('Appetizers', now(), now())
,('Mains', now(), now())
,('Dessert', now(), now())
,('Drinks', now(), now())
,('Sides', now(), now())
;

Insert into pos_db.employees
(
  `employee_id`,
  `firstName`,
  `lastName`,
  `pin`,
  `clocked_in`,
  `address`,
  `city`,
  `phone`,
  `roleID`,
	`createdAt`,
	`updatedAt`
)
Values
(1,'first1','last1',1,true,'123 Lane1','Minneapolis1','111-222-3333',1, now(), now()),
(2,'first2','last2',2,true,'123 Lane2','Minneapolis2','111-222-3333',1, now(), now());

insert into pos_db.employee_role
(
`employee_role_id`,
`roleName`,
`createdAt`,
`updatedAt`
)
values
(1,'FoH', now(), now());

insert into pos_db.OrderItems
(
    `orderID`,
    `menuID`,
    `itemName`,
	`createdAt`,
	`updatedAt`
)
values
(1,1,'TestStaticItemName', now(), now());

-- DO NOT RUN ORDER SCRIPT IF YOU ARE ATTEMPTING TO ACTUALLY MAKE AN ORDER 

insert into pos_db.`order`
(
    `orderID`,
    `employeeID`,
    `subtotal`,
    `total`,
	`createdAt`,
	`updatedAt`
)
values
(1,1,1,1, now(), now());