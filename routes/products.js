const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getAllProductsStatic,
  getProduct,
} = require("../controllers/products");
const { route } = require("express/lib/router");

router.route("/").get(getAllProducts);
router.route("/static").get(getAllProductsStatic);
router.route("/:id").get(getProduct);

module.exports = router;
