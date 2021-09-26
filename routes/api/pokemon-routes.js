const router = require('express').Router();
const { Pokemon, Type } = require('../../models');


//get all pokemon
router.get('/', (req, res) => {
  
//find all pokemon
Pokemon.findAll({
    attributes: ['id', 'pokemon_name']
  })  
  .then(dbPokemon => res.json(Pokemon))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get one pokemon
router.get('/:id', (req, res) => {
  //find a single pokemon by its 'id'
  Pokemon.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'Pokemon_name']
  }

//delete pokemon
router.delete('/:id', (req, res) => {
  //delet one product by its 'id' value
  Pokemon.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPokemon => {
    if (!dbPokemon) {
      rs.status(404).json({message: 'No product found with this id'});
      return;
    }
    res.json(dbPokemon);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

module.exports = router;
