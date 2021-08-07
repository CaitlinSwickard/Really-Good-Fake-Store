const router = require('express').Router();
// const {  } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.status(200).render ('homepage');
    
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;