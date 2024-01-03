const router = require('express').Router();

router.post('/signup',(req,res,next)=>{
    //signup logic
})

router.post('/signin',(req,res,next)=>{
    // sign in logic and add the jwt token in the local storage
})


router.get('/products',(req,res,next)=>{
    // add products logic
})

router.get('/products/:pid',(req,res,next)=>{
    // edit product logic
})

router.post('/add-cart',(req,res,next)=>{
    // add logic for 
})

router.post('/purchase-course',(req,res,next)=>{
    // add purchase course logic for cart
})

router.get('/cart',(req,res,next)=>{
    // add get cart logic
})

router.get('/purchased-products',(req,res,next)=>{
    // add view purchased products in admin side logic
})

router.get('/view-profile',(req,res,next)=>{
    // add view profile data in admin side logic
})

module.exports = router;