const router = require('express').Router();
const {Wishlist} = require('../../models');

router.get('/', async (req, res) => { 
    try {
        const getAllWishlist = await Wishlist.findAll();
        res.json(getAllWishlist);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;