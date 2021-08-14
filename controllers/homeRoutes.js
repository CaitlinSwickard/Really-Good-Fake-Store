const router = require('express').Router();
const { Product } = require('../models');


// get all product
router.get('/', async (req, res) => {
  try {
    const category = await Product.findAll({
      where: {
        featured: true
      }
    });
    const products = category.map(product => product.toJSON())
    res.status(200).render('homepage', {
      products,
      logged_in: req.session.logged_in
    });

  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;

