const sequelize = require('sequelize');

const db = new sequelize('db_belajar_nodejs','root', '', {
    dialect: 'mysql'
});

db.sync({});

module.exports = db;