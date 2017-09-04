module.exports = function(app){
  var sequelize = require('./dbconnect');
  var User = require('../auth-models/users');
  console.log("storage", sequelize.options.storage);
  sequelize
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
    })
    .catch(err => {
    console.error('Unable to connect to the database:', err);
    });
}