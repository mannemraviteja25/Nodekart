const app = require('express')();

const homePage = require('./routes/homepage.js')

const port = 3000;


app.use('/home',homePage);



app.listen({port});