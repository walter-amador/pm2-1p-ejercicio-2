const { Sequelize } = require('sequelize');
/*
    REMEMBER TO ->
    Make a copy of .env.template and name it as .env there you have to make your configurations
*/

//Bringing environmental variables from .env file located at the root level folders
const db = new Sequelize(process.env.DATABASE_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT
});


module.exports = db;
