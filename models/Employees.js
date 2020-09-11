'use strict';

module.exports = function (sequelize, DataTypes) {
  const Employees = sequelize.define(
    "Employees",
    {
      employee_id: {
        Type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      firstName: {
        Type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        Type: DataTypes.STRING,
        allowNull: false
      },
      pin: {
        Type: DataTypes.INTEGER,
        allowNull: false
      },
      clocked_in: {
        Type: DataTypes.BOOLEAN,
        defaultValue: 0
      },
      address: {
        Type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        Type: DataTypes.STRING,
        allowNull: false
      },
      phone: {
        Type: DataTypes.STRING,
        allowNull: false
      },
      roleID: {
        Type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'EmployeeRole',
          key: 'employee_role_id'
        }
      }
    },
    {
      freezeTableName: true,
    }
  );
  Employees.associate = function (models) {
    Employees.belongsTo(models.EmployeeRole,
      { foreignKey: 'employee_role_id', as: 'roleID' })
  };

  return Employees;
};
