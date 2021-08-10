const router = require('express').Router();
const { Product } = require('../../models');

// git all products
router.get('/', async (req, res) => {
    try {
        const productData = await Product.findAll()
        const products = productData.map(product => product.toJSON())
        res.status(200).render('products', {
            products
        })
    } catch (err) {
        res.status(500).json(err)
    }
});

// get men's clothing
router.get('/mens', async (req, res) => {
    try {
        const category = await Product.findAll({
            where: {
                category: "men's clothing"
            }
        });

        const products = category.map(product =>product.toJSON())
        res.status(200).json(category);
        console.log(category);

    } catch (err) {
        res.status(400).json(err);
    }
});


// get women's clothing
router.get('/womens', async (req, res) => {
    try {
        const category = await Product.findAll({
            where: {
                category: "women's clothing"
            }
        });

        const products = category.map(product =>product.toJSON())
        res.status(200).json(category);
        console.log(category);

    } catch (err) {
        res.status(400).json(err);
    }
});


// get jewelery
router.get('/jewelery', async (req, res) => {
    try {
        const category = await Product.findAll({
            where: {
                category: "jewelery"
            }
        });

        const products = category.map(product =>product.toJSON())
        res.status(200).json(category);
        console.log(category);

    } catch (err) {
        res.status(400).json(err);
    }
});

// get electronics
router.get('/electronics', async (req, res) => {
    try {
        const category = await Product.findAll({
            where: {
                category: "electronics"
            }
        });

        const products = category.map(product =>product.toJSON())
        res.status(200).json(category);
        console.log(category);

    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;