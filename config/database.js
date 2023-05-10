// const { Client } = require('pg')
const dotenv = require('dotenv');
dotenv.config({path:"./config/config.env"});

const { Sequelize } = require('sequelize');
const db = new Sequelize(
    process.env.DB_DATABASE,    // DB Name
    process.env.DB_USER,   // DB of user name
    process.env.DB_PASSWORD,    // DB Password
    {
        host: process.env.DB_HOST,  // DB Hostname
        dialect: "mysql",
        logging: false // if you want to show the raw query
    }
);

module.exports = db;
