const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Pokemon extends Model {}

Pokemon.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    height: {
      type: DataTypes.INTEGER
    },
    weight: {
      type: DataTypes.INTEGER
    },
    front_default: {
      type: DataTypes.STRING
    },
    entry_number: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'pokemon'
  }
);

module.exports = Pokemon;