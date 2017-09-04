var Sequelize = require('sequelize');
var path = require('path');
var sequelize = new Sequelize('sequelize', '', '', {
    dialect: 'sqlite',      
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    storage: path.join(__dirname, 'data/userdb.sqlite'),
    logging: false
});

module.exports = sequelize;