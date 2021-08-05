const router = require('express').Router();
const customerRoutes = require('./customerRoutes');
const loginRoutes = require('./loginRoutes');

router.use('/customers', customerRoutes);
router.use('/logins',loginRoutes);

module.exports = router;