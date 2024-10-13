const mysql = require("mysql2/promise");
const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/databaseConnect");

const ProductModel = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Name of the Product is required",
        },
        notNull: true,
      },
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Price of the Product is required",
        },
        notNull: true,
        isNumeric: true,
        min: {
          args: 1,
          msg: "Value must be >=1",
        },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Category of the Product is required",
        },
        notNull: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = ProductModel;
