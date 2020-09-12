'use strict';

//const Employee_Role = require('./EmployeeRole');
//import Employee_Role from './EmployeeRole';

module.exports = function (sequelize, DataTypes) {
  const Employees = sequelize.define(
    "Employees",
    {
      employee_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      pin: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      clocked_in: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      roleID: {
        type: DataTypes.INTEGER,
        allowNull: false
        // references: {
        //   model: Employee_Role,
        //   key: 'employee_role_id'
        // }
      }
    },
    {
      freezeTableName: true,
    }
  );
  Employees.associate = function (models) {
    Employees.hasOne(models.Employee_Role,
      { foreignKey: 'employee_role_id' })
  };



  return Employees;
};
