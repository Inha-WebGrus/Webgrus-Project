const Sequelize = require('sequelize');
const User = require('./user');
const UserSession = require('./user_session');
const EmailVerify = require('./email_verify');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.User = User;
db.EmailVerify = EmailVerify;
db.UserSession = UserSession;

User.init(sequelize);
UserSession.init(sequelize);
EmailVerify.init(sequelize);

User.associate(db);
UserSession.associate(db);

module.exports = db;