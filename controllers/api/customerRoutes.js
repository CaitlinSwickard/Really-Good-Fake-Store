const router = require('express').Router();
const { Customer } = require('../../models');

// get all customers route
router.get('/', async (req, res) => {
    try {
        const allCustomers = await Customer.findAll();
        const customers = allCustomers.map(customer => customer.toJSON());
        // render to homepage
        res.status(200).render('homepage', { customers });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

