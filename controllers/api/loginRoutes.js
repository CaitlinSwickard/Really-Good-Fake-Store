const router = require('express').Router();
const { Customer } = require('../../models');




router.post('/', async (req, res) => { 
    try {
        
        const newCustomer =await Customer.create(req.body);
        res.json(newCustomer);
    } catch (err) {
        res.json(err);
    }
    // console.log(allCustomers);
});




module.exports= router 