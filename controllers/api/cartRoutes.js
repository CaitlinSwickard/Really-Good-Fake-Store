const router = require('express').Router();
const {Cart } = require('../../models');

router.get('/', async (req, res) => { 
    try {
        const getAllCart = await Cart.findAll();
        res.json(getAllCart);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;