'use strict';

module.exports = function(sequelize, DataTypes) {
    const Order = sequelize.define("Order", {
        orderID: DataTypes.INTEGER,
        employeeID: DataTypes.INTEGER,
        subtotal: DataTypes.DECIMAL,
        total: DataTypes.DECIMAL
    });
  
    return Order;
  };
  