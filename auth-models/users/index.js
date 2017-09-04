var Sequelize = require('sequelize');
var sequelize = require('../../auth-data/dbconnect');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    github_id: {
        type: Sequelize.INTEGER,
        unique: true
    }
})

module.exports = User;