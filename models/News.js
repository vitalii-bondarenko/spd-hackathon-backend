const Sequelize = require("sequelize");

module.exports = sequelize.define(
    'News',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING
        },
        createdBy: {
            type: Sequelize.STRING
        },
        text: {
            type: Sequelize.TEXT
        },
        videoUrl: {
            type: Sequelize.STRING
        }
    });
