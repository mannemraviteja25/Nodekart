const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/product-list", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/products",
      });
    })
    .catch((err) => {
      console.log(
        "error while fetching all products from db to admin page",
        err
      );
    });
};
