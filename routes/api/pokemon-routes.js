const router = require('express').Router();
const { Pokemon } = require('../../models');

const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Pokemon.findAll()
    .then(dbPokemonData => res.json(dbPokemonData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  // expects => {Pokemon_text: "This is the Pokemon", user_id: 1, post_id: 2}
  Pokemon.create({
    Pokemon_text: req.body.Pokemon_text,
    user_id: req.session.user_id,
    post_id: req.body.post_id
  })
    .then(dbPokemonData => res.json(dbPokemonData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Pokemon.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPokemonData => {
      if (!dbPokemonData) {
        res.status(404).json({ message: 'No Pokemon found with this id!' });
        return;
      }
      res.json(dbPokemonData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;