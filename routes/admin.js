const router = require("express").Router();
const adminRoutes = require("../controllers/admin");

router.post("/add-product", adminRoutes.postAddProduct);
router.get("/", adminRoutes.getAddProduct);

router.get("/products", adminRoutes.getProducts);

router.get("/account", (req, res) => {
  // res.render("../views/admin/admin_account.ejs");
});
module.exports = router;
