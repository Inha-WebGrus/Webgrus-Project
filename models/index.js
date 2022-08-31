const Sequelize = require('sequelize');
const Place = require('./place');
const User = require('./user');
const EmailVerification = require('./email_verification');
const UserSession = require('./user_session');
const PlaceReview = require('./place_review');
const Userzzim = require('./user_zzim');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.Place = Place;
db.User = User;
db.EmailVerification = EmailVerification;
db.UserSession = UserSession;
db.PlaceReview = PlaceReview;
db.Userzzim = Userzzim;

Place.init(sequelize);
User.init(sequelize);
UserSession.init(sequelize);
EmailVerification.init(sequelize);
PlaceReview.init(sequelize);
Userzzim.init(sequelize);

Place.associate(db);
User.associate(db);
UserSession.associate(db);
PlaceReview.associate(db);
Userzzim.associate(db);

module.exports = db;