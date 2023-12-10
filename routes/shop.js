const router = require('express').Router();
const shopController = require('../controllers/shop');


router.get('/products',shopController.getProducts);

module.exports = router;