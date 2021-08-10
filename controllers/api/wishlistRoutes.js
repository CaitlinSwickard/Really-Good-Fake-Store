const router = require('express').Router();
const {Wishlist} = require('../../models');

router.get('/', async (req, res) => { 
    try {
        const getAllWishlist = await Wishlist.findAll();
        const wishlists = getAllWishlist.map(wishlist => wishlist.toJSON());
        // render to homepage
        res.status(200).render('homepage', { wishlists });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;