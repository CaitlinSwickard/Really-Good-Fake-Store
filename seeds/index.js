const sequelize = require('../config/connection');
const customerData = require('./customerSeedData');
const cartData = require('./cartSeedData');
const productData = require('./productSeedData')
const { Customer, Cart, Product } = require('../models');

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    await Customer.bulkCreate(customerData, 
      { individualHooks: true }
    );
    await Product.bulkCreate(productData);
    await Cart.bulkCreate(cartData);
  } catch (error) {
    console.log(error);
  }
  
  process.exit(0);
};

seedAll();
