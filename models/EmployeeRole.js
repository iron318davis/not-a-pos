'use strict';

module.exports = function (sequelize, DataTypes) {
  const Employee_Role = sequelize.define(
    "Employee_Role",
    {
      employee_role_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      roleName: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      freezeTableName: true,
    }
  );

  return Employee_Role;
};
