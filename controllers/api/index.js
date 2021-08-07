const router = require('express').Router();
const customerRoutes = require('./customerRoutes');
const cartRoutes = require('./cartRoutes');
const wishlistRoutes = require('./wishlistRoutes');
const productRoutes = require('./productRoutes');

router.use('/customers', customerRoutes);
router.use('/carts', cartRoutes);
router.use('/wishlists', wishlistRoutes);
router.use('/products', productRoutes);

module.exports = router;