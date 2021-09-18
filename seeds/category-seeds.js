const { Category } = require('../models');

const categoryData = [
  {
    category_name: '',
  },
  {
    category_name: '',
  },
  {
    category_name: '',
  },
  {
    category_name: '',
  },
  {
    category_name: '',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;