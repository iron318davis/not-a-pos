'use strict';

module.exports = function (sequelize, DataTypes) {
    const Menu = sequelize.define(
        "Menu",
        {
            menu_id: {
                Type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            itemName: {
                Type: DataTypes.STRING,
                allowNull: false
            },
            categoryID: {
                Type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Categories',
                    key: 'categories_id'
                }
            },
            price: {
                Type: DataTypes.DECIMAL(13, 2),
                allowNull: false
            },
            item_description: {
                Type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            freezeTableName: true,
        }
    );
    Menu.associate = function (models) {
        Menu.belongsTo(models.Categories,
            { foreignKey: 'categories_id', as: 'categoryID' })
    };

    return Menu;
};
