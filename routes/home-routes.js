const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Pokemon, } = require('../models');

// get all apiSearchs for homepage

    .then(dbapiSearchData => {
      const apiSearchs = dbapiSearchData.map(apiSearch => apiSearch.get({ plain: true }));

      res.render('homepage', {
        apiSearchs,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single apiSearch
router.get('/apiSearch/:id', (req, res) => {
  apiSearch.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'apiSearch_url',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE apiSearch.id = vote.apiSearch_id)'), 'vote_count']
    ],
    include: [
      {
        model: Pokemon,
        attributes: ['id', 'Pokemon_text', 'apiSearch_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbapiSearchData => {
      if (!dbapiSearchData) {
        res.status(404).json({ message: 'No apiSearch found with this id' });
        return;
      }

      const apiSearch = dbapiSearchData.get({ plain: true });

      res.render('single-apiSearch', {
        apiSearch,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;