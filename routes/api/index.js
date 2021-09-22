const router = require('express').Router();
const pokemonRoutes = require('./pokemon-routes');
const userRoutes = require('./user-routes');

router.use('/pocket monsters', pokemonRoutes);
router.use('/users.', userRoutes);

module.exports = router;

//Will need to make futher changes