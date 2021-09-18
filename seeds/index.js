const seedCategories = require('./category-seeds');
const seedpocketmonsters = require('./pokemon-seeds');
const seedpokemontypes = require('./type-seeds');
const seedusers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedpocketmonsters();
  console.log('\n----- POKEMON SEEDED -----\n');

  await seedpokemontypes();
  console.log('\n----- TYPES SEEDED -----\n');

  await seedusers();
  console.log('\n----- USERS SEEDED -----\n');

  process.exit(0);
};

seedAll();