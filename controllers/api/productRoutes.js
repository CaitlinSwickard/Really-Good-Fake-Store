const router = require('express').Router();
const {Product} = require('../../models');

router.get('/', async(req,res)=>{
    try{
        const productData = await Product.findAll()
        const products = productData.map(product =>product.toJSON())
        res.status(200).render('products',{
            products 
        })
    }catch(err){
        res.status(500).json(err)
    }

})





module.exports = router;