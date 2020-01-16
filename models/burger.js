module.exports = function(sequelize, DataTypes) {
  const Burger = sequelize.define("Burger", {
    burgerName: { type: DataTypes.STRING },
    devour: { type: DataTypes.BOOLEAN, defaultValue: false }
  });
  return Burger;
};
