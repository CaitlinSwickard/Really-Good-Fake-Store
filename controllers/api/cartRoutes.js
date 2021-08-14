const router = require('express').Router();
const { Cart, Customer, Product } = require('../../models');
const withAuth = require("../../utils/auth");

router.get('/', withAuth, async (req, res) => { 
    try {
        const cartProducts = await Customer.findAll({
            where: {
                id: req.session.user_id
            },
            include: [{ model: Product, through: Cart }]
        });

        const carts = cartProducts.map(cart => cart.toJSON());
        const products = carts[0].products;
        res.status(200).render('cart', { 
            products,
            logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/current', withAuth, async (req, res) => { 
    try {
        const cartProducts = await Customer.findAll({
            where: {
                id: 2
            },
            include: [{ model: Product, through: Cart }]
        });

        const carts = cartProducts.map(cart => cart.toJSON());
        const products = carts[0].products;
        const allProducts = products.map(product => product.cart.product_id);
        const stringProducts = JSON.stringify(allProducts);
        console.log(stringProducts);
        res.status(200).json(stringProducts);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post("/", async (req, res) => {
    try {
        const newCart = await Cart.create({
            product_id: req.body.product_id,
            customer_id: req.session.user_id
        });
        res.status(200).json(newCart);
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updatedQty = await Cart.update(req.body, {
            where: {
              id: req.params.id,
            }
        });

        if (!updatedQty[0]) {
            res.status(404).json({ message: "No product found with this id"});
            return;
        }

        res.status(200).json(updatedQty);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedProduct = await Cart.destroy({
            where: {
              id: req.params.id
            }
        });

        if (!deletedProduct) {
            res.status(404).json({ message: 'No product found with this id' });
            return;
        }

        res.status(200).json(deletedProduct);
    } catch (e) {
        res.status(500).json(e);
    }
});

module.exports = router;