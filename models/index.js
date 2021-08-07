const Cart = require('./Cart');
const Customer = require('./Customer');
const Wishlist = require('./Wishlist');
const Product = require('./Products');


Customer.hasMany(Cart, {
  foreignKey: 'customer_id',
  onDelete: 'CASCADE'
});

Customer.hasMany(Wishlist, {
  foreignKey: 'customer_id',
  onDelete: 'CASCADE'
})

Cart.belongsTo(Customer, {
  foreignKey: 'customer_id'
});

Wishlist.belongsTo(Customer, {
  foreignKey: 'customer_id'
});



module.exports = { Cart, Customer, Wishlist, Product};


