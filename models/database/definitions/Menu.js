'use strict';

const DataTypes = require('sequelize');

module.exports = {
    menu_id: DataTypes.INTEGER,
    itemName: DataTypes.STRING,
    categoryID: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    item_description: DataTypes.STRING
};
