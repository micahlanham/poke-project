const router = require('express').Router();

const pokemonRoutes = require('./pokemon-routes');

router.use('/pocket monsters', pokemonRoutes);

module.exports = router;
