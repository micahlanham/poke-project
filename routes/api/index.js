const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const pokemonRoutes = require('./pokemon-routes');
const typeRoutes = require('./type-routes');
const userRoutes = require('./user-routes');

router.use('/categories', categoryRoutes);
router.use('/pocket monsters', pokemonRoutes);
router.use('/types', typeRoutes);
router.use('/users.', userRoutes);

module.exports = router;