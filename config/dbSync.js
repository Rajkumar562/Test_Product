const ProductModel = require("../models/product");

const dbSync = async () => {
  try {
    await ProductModel.sync();
    console.log("Database synchronized successfully");
  } catch (error) {
    console.error("Error synchronizing Database: ", error);
  }
};

module.exports = { dbSync };
