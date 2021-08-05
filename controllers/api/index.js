const router = require('express').Router();
const customerRoutes = require('./customerRoutes');
const cartRoutes = require('./cartRoutes');
const wishlistRoutes = require('./wishlistRoutes')

router.use('/customers', customerRoutes);
router.use('/carts', cartRoutes);
router.use('/wishlists', wishlistRoutes);

module.exports = router;