const sequelize = require('../config/connection');
const { Customer } = require('../models');

const customerData = require('./customerSeedData.json');


const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log(customerData);
    await Customer.create(customerData[0]);

  } catch (error) {
    console.log(error);
  }
  
  process.exit(0);
};

seedAll();
