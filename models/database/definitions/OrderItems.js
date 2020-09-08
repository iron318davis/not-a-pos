'use strict';

const DataTypes = require('sequelize');

module.exports = {
    ID: DataTypes.INTEGER,
    orderID: DataTypes.INTEGER,
    menuID: DataTypes.INTEGER,
    ItemName: DataTypes.TEXT
};
