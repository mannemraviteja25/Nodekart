const router = require('express').Router();

router.post('/signup',(req,res,next)=>{
    //signup logic
})

router.post('/signin',(req,res,next)=>{
    // sign in logic and add the jwt token in the local storage
})


router.post('/add-product',(req,res,next)=>{
    // add products logic
})

router.post('/edit-products',(req,res,next)=>{
    // edit product logic
})

router.post('/edit-profile',(req,res,next)=>{
    // add edit admin profile logic
})

router.post('/delete',(req,res,next)=>{
    // add delete product logic
})

router.get('/products',(req,res,next)=>{
    // add view products in admin side logic
})

router.get('/view-profile',(req,res,next)=>{
    // add view profile data in admin side logic
})

module.exports = router;