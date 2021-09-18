const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Type extends Model {}

Type.init(
  {
    //Code here
  }
);

module.exports = Type;