const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Pokemon extends Model {}

Pokemon.init(
  {
    //Code here
  }
);

module.exports = Pokemon;