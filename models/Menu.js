'use strict';

module.exports = function(sequelize, DataTypes) {
    const Menu = sequelize.define("Menu", {
        menu_id: DataTypes.INTEGER,
        itemName: DataTypes.STRING,
        categoryID: DataTypes.INTEGER,
        price: DataTypes.DECIMAL,
        item_description: DataTypes.STRING
    });
  
    return Menu;
  };
  