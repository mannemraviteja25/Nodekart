const router = require('express').Router();

router.get('/', (req, res)=>{
    res.render("../views/admin.ejs")
})

router.get('/products', (req, res)=>{
    res.render("../views/admin_products.ejs");
})

router.get('/account', (req, res)=>{
    res.render("../views/admin_account.ejs");
})
module.exports = router;