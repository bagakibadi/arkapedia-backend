'use strict';
module.exports = (sequelize, DataTypes) => {
  const shop = sequelize.define('shop', {
    name: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    followers: DataTypes.INTEGER,
    soldProduct: DataTypes.INTEGER
  }, {});
  shop.associate = function(models) {
    // associations can be defined here
  };
  return shop;
};