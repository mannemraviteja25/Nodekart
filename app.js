const app = require('express')();

const homeRoute = require('./routes/home.js');
const userRoute = require('./routes/users.js');

const port = 3000;


app.use('/home',homeRoute);
app.use('/user',userRoute);



app.listen({port});