'use strict';

const DataTypes = require('sequelize');

module.exports = {
    orderID: DataTypes.INTEGER,
    employeeID: DataTypes.INTEGER,
    subtotal: DataTypes.DECIMAL,
    total: DataTypes.DECIMAL
};
