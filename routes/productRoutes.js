const express = require("express");
const router = express.Router();
const {
  getProduct,
  createProduct,
  getSingleProduct,
  updatedProduct,
  deleteProduct,
} = require("../controller/productController");

router.get("/", getProduct);
router.post("/", createProduct);
router.get("/:id", getSingleProduct);
router.put("/:id", updatedProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
