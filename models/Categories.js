'use strict';

module.exports = function (sequelize, DataTypes) {
    const Categories = sequelize.define(
        "Categories",
        {
            categories_id: {
                Type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
              },
            category_name: {
                Type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            freezeTableName: true,
        }
    );

    return Categories;
};
