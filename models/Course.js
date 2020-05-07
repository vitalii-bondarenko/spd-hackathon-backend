const Sequelize = require("sequelize");

module.exports = sequelize.define(
    'Course',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        name: {
            type: Sequelize.STRING
        }
    });

