const router = require('express').Router();
const { Customer } = require('../../models');

router.get('/', async (req, res) => { 
    try {
        const allCustomers =await Customer.findAll();
        res.json(allCustomers);
    } catch (err) {
        res.json(err);
    }
    // console.log(allCustomers);
});

module.exports = router;