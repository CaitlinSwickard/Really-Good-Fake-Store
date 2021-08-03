const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Customer extends Model { }

Customer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    // hooks: {
    //   beforeCreate: async (newUserData) => {
    //     try {
    //       const salt = await bcrypt.genSalt(10);
    //       newUserData.password = await bcrypt.hash(newUserData.password, salt);
    //       return newUserData;
    //     } catch (err) {
    //       if (err) throw err;
    //       // do we need res.json here????
    //     }
    //   },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'customer',
  }
);


module.exports = Customer;

