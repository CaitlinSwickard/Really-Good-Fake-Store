const router = require('express').Router();
const { Cart, Customer, Product } = require('../../models');

router.get('/', async (req, res) => { 
    try {
        const cartProducts = await Customer.findAll({
            where: {
                id: req.session.user_id
            },
            include: [{ model: Product, through: Cart }]
        });

        const carts = cartProducts.map(cart => cart.toJSON());
        const products = carts[0].products;
        res.status(200).render('cart', { products });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
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
        console.log(e);
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