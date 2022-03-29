const Sequelize = require('sequelize');
const sequelize = require('../database/scriptDB');
const User = require('../models/user')
const Posts = require('../models/post');


const Comments = sequelize.define('comments', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    message: {
        type: Sequelize.STRING,
        defaultValue: true,
        length: 500,
    }

});

User.hasMany(Comments);
Comments.belongsTo(User);

Posts.hasMany(Comments);
Comments.belongsTo(Posts);


module.exports = Comments;