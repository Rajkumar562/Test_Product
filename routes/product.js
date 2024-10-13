const { Router } = require("express");

const {
  handleAddProduct,
  handleGetAllProducts,
  handleGetProductById,
  handleUpdateProductById,
  handleDeleteProductById,
} = require("../controllers/product");

const router = Router();

router.post("/", handleAddProduct);

router.get("/", handleGetAllProducts);

router.get("/:id", handleGetProductById);

router.put("/:id", handleUpdateProductById);

router.delete("/:id", handleDeleteProductById);

module.exports = router;
