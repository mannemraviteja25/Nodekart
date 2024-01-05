const { JWT_password } = require("../config");
const jwt = require('jsonwebtoken');

const verifyAdmin = (req, res, next) => {
  try {
    console.log(("In verify admin"))
    const token = req.headers.token;
    jwt.verify(token, JWT_password);
    console.log("out of verity admin")
    next();
  }
  catch (error) {
    console.log(("in some error"))
    console.log(error);
  }
}


module.exports = {
  verifyAdmin
}
