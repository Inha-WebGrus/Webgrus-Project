const Sequelize = require('sequelize');
const User = require('./user');
const EmailVerification = require('./email_verification');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.User = User;
db.EmailVerification = EmailVerification;

User.init(sequelize);
EmailVerification.init(sequelize);

module.exports = db;