module.exports = function(sequelize, DataTypes) {
  var Pin = sequelize.define("Pin", {
    // Giving the Author model a name of type STRING
    pin: DataTypes.INTEGER,
    permissions: DataTypes.STRING
  });

  // Author.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    // Author.hasMany(models.Post, {
      // onDelete: "cascade"
    // });
  // };

  return Pin;
};
