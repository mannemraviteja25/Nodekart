const router = require("express").Router();
const adminController = require("../controllers/admin");

router.post("/add-product", adminController.postAddProduct);
router.get("/", adminController.getAddProduct);

router.get("/products", adminController.getProducts);

router.get("/account", (req, res) => {
  // res.render("../views/admin/admin_account.ejs");
});
module.exports = router;
