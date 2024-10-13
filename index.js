const express = require("express");
const { dbConnection } = require("./config/databaseConnect");
const { dbSync } = require("./config/dbSync");
const productRoute = require("./routes/product");

const app = express();

const PORT = 8001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/products", productRoute);

dbSync();

app.listen(PORT, () => {
  console.log(`Server running at PORT : ${PORT}`);
  dbSync();
});
