'use strict';

const DataTypes = require('sequelize');

module.exports = {
    customer_order_id: DataTypes.INTEGER,
    orderID: DataTypes.INTEGER,
    employeeID: DataTypes.INTEGER,
    orderDtTm: DataTypes.DATE,
    closedDtTm: DataTypes.DATE,
    subtotal: DataTypes.DECIMAL,
    total: DataTypes.DECIMAL
};
