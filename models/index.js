const Cart = require('./Cart');
const Customer = require('./Customer');
const Product = require('./Products');

Customer.belongsToMany(Product, { through: Cart });

// Customer.belongstoMany(Product, { through: Wishlist });

Product.belongsToMany(Customer, { through: Cart });

// Product.belongsToMany(Customer, { through: Wishlist });

// Customer.hasMany(Wishlist, {
//   foreignKey: 'customer_id',
//   onDelete: 'CASCADE'
// })

// Cart.belongsTo(Customer, {
//   foreignKey: 'customer_id'
// });

// Wishlist.belongsTo(Customer, {
//   foreignKey: 'customer_id'
// });

module.exports = { Cart, Customer, Product };


