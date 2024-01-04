const { JWT_password } = require("../config");

const verifyUser = (req,res,next) =>{
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
    verifyUser
}