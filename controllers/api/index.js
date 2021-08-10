const router = require('express').Router();
const customerRoutes = require('./customerRoutes');
const cartRoutes = require('./cartRoutes');
const productRoutes = require('./productRoutes');

router.use('/customers', customerRoutes);
router.use('/cart', cartRoutes);
router.use('/products', productRoutes);

module.exports = router;