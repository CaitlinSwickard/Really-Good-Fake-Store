const router = require('express').Router();
const {Cart } = require('../../models');

router.get('/', async (req, res) => { 
    try {
        const getAllCart = await Cart.findAll();
        const carts = getAllCart.map(cart => cart.toJSON());
        // render to homepage
        res.status(200).render('homepage', { carts });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;