'use strict';

module.exports = function (sequelize, DataTypes) {
    const Order = sequelize.define(
        "Order",
        {
            orderID: {
                Type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            employeeID: {
                Type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Employees',
                    key: 'employee_id'
                }
            },
            orderDtTm: {
                Type: DataTypes.DATETIME,
                defaultValue: Sequelize.NOW
            },
            subtotal: {
                Type: DataTypes.DECIMAL(13,2),
                allowNull: false
            },
            total: {
                Type: DataTypes.DECIMAL,
                allowNull: false
            }
        },
        {
            freezeTableName: true,
        }
    );
    Order.associate = function (models) {
        Order.belongsTo(models.Employees,
            { foreignKey: 'employee_id', as: 'employeeID' })
    };

    return Order;
};
