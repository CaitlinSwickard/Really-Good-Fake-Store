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
        console.log("CARTS", carts);
        console.log("PRODUCTS", products)
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
            res.status(404).json({ message: "Item not available"});
            return;
        }
        res.status(200).redirect("/api/cart");
    } catch (e) {
        res.status(500).json(e);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedProduct = await Cart.destroy({
            where: {
              id: req.params.id,
            }
        });
        res.status(200).redirect("/api/cart");
    } catch (e) {
        res.status(500).json(e);
    }
});

module.exports = router;