INSERT INTO `pos_db`.`categories`
(`category_name`)
VALUES
 ('Appetizers')
,('Mains')
,('Dessert')
,('Drinks')
;

INSERT INTO `pos_db`.`menu`
(`itemName`,
 `categoryID`,
 `price`,
 `item_description`)
VALUES
 ('Fries',1,4.99,'Hand cut, crispy, and delicious')
,('Onion Rings',1,5.99,'Slim rings in a crispy seasoned shell') 
,('Cheese Curds',1,6.99,'Squeaky, gooey, and oh-so-good') 
,('Sampler Platter',1,7.99,'All three of our can''t miss appetizers')  
,('Hamburger',2,9.99,'An American Classic, unadorned')
,('Cheeseburger',2,10.99,'An American Classic with American cheese')
,('Hamburger Deluxe',2,11.99,'An American Classic with extra toppings')
,('Cheeseburger Deluxe',2,12.99,'An Cheesy Classic with everything on it')
,('Sundae',3,7.99,'Ice cream and a choice of topping')
,('Banana Split',3,7.99,'A classic dessert, made healthy with fruit!')
,('Chocolate Parfait ',3,7.99,'Nothing healthy about hot fudge, peanuts, and ice cream')
,('Triple Cone',3,7.99,'Can''t spell HUGE without hug -- what it feels like to eat this much ice cream')
,('Pop',4,2.99,'Pop, Soda, Soda-Pop -- whatever you call it, it''s got bubbles')
,('Beer',4,4.99,'Nectar of the gods')
,('Wine',4,4.99,'Not from a box, but this isn''t fancy')
,('Juice',4,0.99,'Hand squeezed from the bottles we got from the factory')
;

insert into pos_db.employee_role
(
`employee_role_id`,
`roleName`
)
values
(1,'FoH');

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
  `roleID`
)
Values
(1,'first1','last1',1,true,'123 Lane1','Minneapolis1','111-222-3333',1),
(2,'first2','last2',2,true,'123 Lane2','Minneapolis2','111-222-3333',1);

insert into pos_db.`order`
(
    `orderID`,
    `employeeID`,
    `subtotal`,
    `total`
)
values
(1,1,1,1);

insert into pos_db.OrderItems
(
    `orderID`,
    `menuID`,
    `itemName`
)
values
(1,1,'TestStaticItemName');