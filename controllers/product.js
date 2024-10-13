const ProductModel = require("../models/product");
const { Op } = require("sequelize");

async function handleAddProduct(req, res) {
  try {
    const { name, price, description, category } = req.body;
    if (name && price && category) {
      const newProduct = await ProductModel.create({
        name,
        price,
        description,
        category,
      });
      res.status(201).json(newProduct);
    } else
      res.status(400).json({
        error: "Invalid Parameters, please fill the details of product name, price and category ",
        details: error.message,
      });
  } catch (error) {
    res.status(500).json({ error: "Failed to create product", details: error.message });
  }
}

async function handleGetAllProducts(req, res) {
  try {
    let { page = 1, limit = 10, name, category } = req.query;
    const offset = (page - 1) * limit;

    const where = {};
    if (name) {
      where.name = { [Op.like]: `%${name}%` };
    }
    if (category) {
      where.category = { [Op.like]: `%${category}%` };
    }

    page = parseInt(page);
    limit = parseInt(limit);
    if (isNaN(page) || isNaN(limit)) {
      return res.status(404).json({
        msg: "Value Of limit or page should be number",
      });
    }

    const { count, rows: products } = await ProductModel.findAndCountAll({
      where,
      limit: limit,
      offset,
    });

    const totalPages = Math.ceil(count / limit);

    res.status(200).json({
      products,
      currentPage: page,
      totalPages,
      totalItems: count,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products", details: error.message });
  }
}

async function handleGetProductById(req, res) {
  try {
    const product = await ProductModel.findByPk(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product", details: error.message });
  }
}

async function handleUpdateProductById(req, res) {
  try {
    const { name, price, description, category } = req.body;
    if (name && price && category) {
      const product = await ProductModel.findByPk(req.params.id);

      if (product) {
        product.name = name;
        product.price = price;
        product.description = description;
        product.category = category;
        await product.save();
        res.status(200).json(product);
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    } else
      res.status(400).json({
        error: "Invalid Parameters, please fill the details of product name, price and category ",
        details: error.message,
      });
  } catch (error) {
    res.status(400).json({ error: "Failed to update product", details: error.message });
  }
}

async function handleDeleteProductById(req, res) {
  try {
    const product = await ProductModel.findByPk(req.params.id);
    if (product) {
      await product.destroy();
      res.status(200).json({ message: "Product deleted successfully" });
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product", details: error.message });
  }
}

module.exports = {
  handleAddProduct,
  handleGetAllProducts,
  handleGetProductById,
  handleUpdateProductById,
  handleDeleteProductById,
};
