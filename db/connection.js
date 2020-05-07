const {Sequelize} = require('sequelize');

sequelize = new Sequelize(process.env.postgresURI || require('../conf/config').config.postgresURI);

module.exports = sequelize;
