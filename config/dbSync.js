const ProductModel = require("../models/product");
const { dbConnection } = require("./databaseConnect");

const dbSync = async () => {
  try {
    await dbConnection();
    await ProductModel.sync();
    console.log("Database synchronized successfully");
  } catch (error) {
    console.error("Error synchronizing Database: ", error);
  }
};

module.exports = { dbSync };
