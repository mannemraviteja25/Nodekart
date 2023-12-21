const router = require("express").Router();
const adminController = require("../controllers/admin");

router.post("/add-product", adminController.postAddProduct);
router.get("/add-product",adminController.getAddProduct)
router.post("/edit-product:prodId",adminController.postEditProduct)
router.get("/edit-products:prodId", adminController.getEditProduct);
router.get("/edit-products:prodId", adminController.getEditProduct);
router.post("/edit-products:prod:Id",adminController.postEditProduct)

router.get("/products", adminController.getProducts);

module.exports = router;
