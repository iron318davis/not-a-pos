'use strict';

module.exports = function(sequelize, DataTypes) {
    const OrderItems = sequelize.define("OrderItems", {
        ID: DataTypes.INTEGER,
        orderID: DataTypes.INTEGER,
        menuID: DataTypes.INTEGER,
        ItemName: DataTypes.TEXT
    });
  
    return OrderItems;
  };