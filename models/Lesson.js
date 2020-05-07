const Sequelize = require("sequelize");

module.exports = sequelize.define(
    'Lessons',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        subjectId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        subject: {
            type: Sequelize.TEXT
        },
        lessonNumber: {
            type: Sequelize.INTEGER,
        },
        title: {
            type: Sequelize.TEXT
        },
        description: {
            type: Sequelize.TEXT
        },
        lectorName: {
            type: Sequelize.TEXT
        },
        lectorPosition: {
            type: Sequelize.TEXT
        },
        deadline: {
            type: Sequelize.DATE
        },
        presentation_ulr: {
            type: Sequelize.TEXT
        },
        videoUrl: {
            type: Sequelize.TEXT
        },
        homework: {
            type: Sequelize.TEXT
        },
        additional: {
            type: Sequelize.TEXT
        }
    });
