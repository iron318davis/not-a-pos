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
