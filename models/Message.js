const Sequelize = require("sequelize");

module.exports = sequelize.define(
    'Message',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        lessonId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        userFullName: {
            type: Sequelize.STRING,
        },
        text: {
            type: Sequelize.TEXT
        }
    });