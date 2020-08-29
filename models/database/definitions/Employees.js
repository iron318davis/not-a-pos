'use strict';

const DataTypes = require('sequelize');

module.exports = {
  employee_id: DataTypes.INTEGER,
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  pin: DataTypes.INTEGER,
  clocked_in: DataTypes.BOOLEAN,
  address: DataTypes.STRING,
  city: DataTypes.STRING,
  phone: DataTypes.STRING,
  roleID: DataTypes.INTEGER
};