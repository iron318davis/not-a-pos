'use strict';

module.exports = function(sequelize, DataTypes) {
  const Employees = sequelize.define("Employees", {
    employee_id: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    pin: DataTypes.INTEGER,
    clocked_in: DataTypes.BOOLEAN,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    phone: DataTypes.STRING,
    roleID: DataTypes.INTEGER
  });

  return Employees;
};
