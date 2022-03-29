const Sequelize = require('sequelize');
const sequelize = require('../database/scriptDB');

const User = sequelize.define('user', {
    // Modèle pour un utilisateur
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    pseudo: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
    },
    email: {

        type: Sequelize.STRING,
        allowNull: false,
        unique: true

    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pictureUrl: {

        type: Sequelize.STRING,
        allowNull: true
    },
    admin : {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    }
});

module.exports = User;