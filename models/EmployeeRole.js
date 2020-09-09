'use strict';

module.exports = function(sequelize, DataTypes) {
  const Employee_Role = sequelize.define("Employee_Role", {
    employee_role_id: DataTypes.INTEGER,
    roleName: DataTypes.STRING
  });

  return Employee_Role;
};
