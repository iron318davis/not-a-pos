'use strict';

//const Employees = require('./Employees');

module.exports = function (sequelize, DataTypes) {
    const Order = sequelize.define(
        "Order",
        {
            orderID: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            employeeID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Employees',
                    key: 'employee_id'
                }
            },
            orderDtTm: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW
            },
            subtotal: {
                type: DataTypes.DECIMAL(13,2),
                allowNull: false
            },
            total: {
                type: DataTypes.DECIMAL,
                allowNull: false
            },
            ordercooked:{
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            actualorderID:{
                type: DataTypes.INTEGER
            },
            itemName:{
                type: DataTypes.STRING
            }
        },
        {
            freezeTableName: true,
        }
    );
    Order.associate = function (models) {
        Order.belongsTo(models.Employees,
            { foreignKey: 'employee_id' })
    };

    return Order;
};
