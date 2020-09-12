'use strict';

// const Order = require('./Order');
// const Employees = require('./Employees');

module.exports = function (sequelize, DataTypes) {
    const OrderItems = sequelize.define(
        "OrderItems",
        {
            'ID': {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            orderID: {
                type: DataTypes.INTEGER,
                allowNull: false
                // references: {
                //     model: 'Order',
                //     key: 'orderID'
                // }
            },
            menuID: {
                type: DataTypes.INTEGER,
                allowNull: false
                // references: {
                //     model: 'Menu',
                //     key: 'menu_id'
                // }
            },
            ItemName: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            freezeTableName: true,
        }
    );
    OrderItems.associate = function (models) {
        OrderItems.hasOne(models.Order,
            { foreignKey: 'orderID' })
    };
    OrderItems.associate = function (models) {
        OrderItems.hasOne(models.Employees,
            { foreignKey: 'menu_id' })
    };

    return OrderItems;
};