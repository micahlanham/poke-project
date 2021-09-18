const { Type } = require('../models');

const pokemonTypeData = [
  {
    pokemon_id: 1,
    type_id: 2,
  },
  //Fill more columns
];

const seedPokemonTypes = () => Type.bulkCreate(pokemonTypeData);

module.exports = seedPokemonTypes;