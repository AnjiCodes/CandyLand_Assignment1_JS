const express = require("express");
const router = express.Router();

const { getProductsCollection } = require("./func");

router.get("/", (req, res) => {
  res.render("layout");
});

router.get("/product", async (req, res) => {
  try {
    const products = await getProductsCollection().find({}).toArray();
    console.log(products);
    res.render("products", { products: products });
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = router;