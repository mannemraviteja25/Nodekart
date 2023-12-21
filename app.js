const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const shopRoute = require('./routes/shop.js');
const userRoute = require("./routes/users.js");
const adminRoute = require("./routes/admin.js");
const sequelize = require("./util/database.js");

const port = 3000;

app.use("/user", userRoute);
app.use("/",shopRoute);
app.use("/admin", adminRoute);
app.get('/', (req,res)=>{
  res.send("Hii This is home page and by the way how u doing ??")
})

sequelize
  .sync()
  .then((result) => {
    // console.log("result", result);
    app.listen({ port });
  })
  .catch((err) => {
    console.log("error", err);
  });