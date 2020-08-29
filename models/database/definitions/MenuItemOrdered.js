'use strict';

const DataTypes = require('sequelize');

module.exports = {
    menu_item_ordered_id: DataTypes.INTEGER,
    customerOrderID: DataTypes.INTEGER,
    menuID: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    subtotal: DataTypes.DECIMAL
};
