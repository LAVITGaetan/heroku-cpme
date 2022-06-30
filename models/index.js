const dbConfig = require('../config/dbConfig.js');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.DIALECT,
        //best practice
        operatorsAliases: false,
    }
)


// authentification to database
sequelize.authenticate()
    .then(() => {
        console.log('Connected to database');
    })
    .catch(err => {
        console.log(err);
    })

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require('./productModel.js')(sequelize, DataTypes);

//prevent new instance of database on server start
db.sequelize.sync({ force: false })
    .then(() => {
        console.log('re-sync done');
    })

module.exports = db;