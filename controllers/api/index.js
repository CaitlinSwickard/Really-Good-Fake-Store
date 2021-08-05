const router = require('express').Router();
const customerRoutes = require('./customerRoutes');
const loginRoutes = require('./loginRoutes');
const cartRoutes = require('./cartRoutes');
const wishlistRoutes = require('./wishlistRoutes')

router.use('/customers', customerRoutes);
router.use('/logins', loginRoutes);
router.use('/carts', cartRoutes);
router.use('/wishlists', wishlistRoutes);
module.exports = router;