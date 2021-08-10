// <<<<<<< maximo
// // const { Model, DataTypes } = require('sequelize');
// // const sequelize = require('../config/connection');
// // class Cart extends Model {}
// // Cart.init(
// //   {
// //   },
// //   {
// //     sequelize,
// //     timestamps: false,
// //     freezeTableName: true,
// //     underscored: true,
// //     modelName: 'cart',
// //   }
// // );
// // module.exports = Cart

// //Add to cart router.get('/cart/:id', function(req,res)){
// // var productId = req.productId.productId;
// // });

// module.exports = function Cart(initItems) {
//   this.items = initItems; //items in the cart
//   this.totalQty = 0; //total item qty in cart
//   this.totalPrice = 0; //total price in cart
//   this.add = function (item, id) {
//     var storedItem = this.items(id);
//   };
// };
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cart extends Model {  }

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id"
      }
    },
    customer_id: {
      type: DataTypes.INTEGER,
      references: {
        model:'customer',
        key:'id',
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cart',
  }
);

module.exports = Cart
