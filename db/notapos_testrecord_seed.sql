INSERT INTO `pos_db`.`employee_role`
(`roleName`)
VALUES
('Server')
;


INSERT INTO `pos_db`.`employees`
(`firstName`,
`lastName`,
`pin`,
`address`,
`city`,
`phone`,
`roleID`)
VALUES
('Test',
'Server',
'1234',
'111 Main Street',
'Minneapolis',
'5558675309',
1);
