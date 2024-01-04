const { JWT_password } = require("../config");

const verifyAdmin = (req,res,next) =>{
    try{
        const token = req.headers.token;
        jwt.verify(token,JWT_password);
        next();
        }
        catch(error){
            console.log(error);
        }
}


module.exports = {
    verifyAdmin
}