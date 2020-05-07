const Sequelize = require("sequelize");

module.exports = sequelize.define(
    'User',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        gitlab: {
            type: Sequelize.STRING,
        },
        status: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        fullName: {
            type: Sequelize.STRING
        }
    });
