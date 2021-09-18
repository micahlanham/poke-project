const { User } = require('../models');

const userData = [
  {
    user_name: 'Ash',
  },
  {
    user_name: 'Misty',
  },
  {
    user_name: 'Professor',
  },
  {
    user_name: 'Brock',
  },
  {
    user_name: 'Jessie',
  },
  {
    user_name: 'James',
  },
  {
    user_name: 'Gary',
  },
  {
    user_name: 'Officer Jenny',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;