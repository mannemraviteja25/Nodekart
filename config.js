const  dotenv =require('dotenv').config();


const DB_url = process.env.DB_URL;
const JWT_password = process.env.JWT_PASSWORD;
const token = process.env.TOKEN;

module.exports = {
    DB_url,
    JWT_password,
    token
};