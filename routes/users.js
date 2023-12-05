const router = require('express').Router();

router.get('/',(req,res)=>{
    res.send("Hii This is Users Page");
})

module.exports = router;