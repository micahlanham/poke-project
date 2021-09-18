const { Pokemon } = require('../models');

const pokemonData = [
  {
    pokemon_name: '',
    //More data
    category_id: 1,
  },
  {
    pokemon_name: '',
    //More data
    category_id: 2,
  },
  {
    pokemon_name: '',
    //More data
    category_id: 3,
  },
  {
    pokemon_name: '',
    //More data
    category_id: 4,
  },
  {
    pokemon_name: '',
    //More data
    category_id: 5,
  },
];

const seedPocketMonsters = () => Pokemon.bulkCreate(pokemonData);

module.exports = seedPocketMonsters;