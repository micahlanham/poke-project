const { PokemonType } = require('../models');

const pokemonTypeData = [
  {
    pokemon_id: 1,
    type_id: 2,
  },
  //Fill more columns
];

const seedpokemontypes = () => PokemonType.bulkCreate(pokemonTypeData);

module.exports = seedpokemontypes;