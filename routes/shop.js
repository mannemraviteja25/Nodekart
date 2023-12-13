const router = require('express').Router();
const shopController = require('../controllers/shop');


router.get('/products',shopController.getProducts);
router.get('/product/:prodId',shopController.getProduct)

module.exports = router;