'use strict';

module.exports = function (sequelize, DataTypes) {
    const OrderItems = sequelize.define(
        "OrderItems",
        {
            'ID': {
                Type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            orderID: {
                Type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Order',
                    key: 'orderID'
                }
            },
            menuID: {
                Type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Menu',
                    key: 'menu_id'
                }
            },
            ItemName: {
                Type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            freezeTableName: true,
        }
    );
    OrderItems.associate = function (models) {
        OrderItems.belongsTo(models.Order,
            { foreignKey: 'orderID', as: 'orderID' })
    };
    OrderItems.associate = function (Menu) {
        OrderItems.belongsTo(models.Employees,
            { foreignKey: 'menu_id', as: 'menuID' })
    };

    return OrderItems;
};