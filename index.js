const express = require('express');
const app = express();

const adminRouter = require('./routes/admin');
const userRouter = require('./routes/users');

app.use(express.json());

app.use('/admin', adminRouter);
app.use('/users', userRouter);



app.listen(5000);