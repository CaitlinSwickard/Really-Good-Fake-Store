// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');
// class Cart extends Model {}
// Cart.init(
//   {
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'cart',
//   }
// );
// module.exports = Cart

//Add to cart router.get('/cart/:id', function(req,res)){
// var productId = req.productId.productId;
// });

module.exports = function Cart(initItems) {
  this.items = initItems; //items in the cart
  this.totalQty = 0; //total item qty in cart
  this.totalPrice = 0; //total price in cart
  this.add = function (item, id) {
    var storedItem = this.items(id);
  };
};
