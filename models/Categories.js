'use strict';

module.exports = function(sequelize, DataTypes) {
    const Categories = sequelize.define("Categories", {
        categories_id: DataTypes.INTEGER,
        category_name: DataTypes.STRING
    });
  
    return Categories;
  };
  