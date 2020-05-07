const Sequelize = require("sequelize");

module.exports = sequelize.define(
    'UserCourse',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        courseId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }

    });