'use strict';

//const Categories = require('./Categories');
//comment

module.exports = function (sequelize, DataTypes) {
    const Menu = sequelize.define(
        "Menu",
        {
            menu_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            itemName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            categoryID: {
                type: DataTypes.INTEGER,
                allowNull: false
                // references: {
                //     model: Categories,
                //     key: 'categories_id'
                // }
            },
            price: {
                type: DataTypes.DECIMAL(13, 2),
                allowNull: false
            },
            item_description: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            freezeTableName: true,
        }
    );
    Menu.associate = function (models) {
        Menu.hasOne(models.Categories,
            { foreignKey: 'categories_id' })
    };

    return Menu;
};
