const Sequelize = require('sequelize')

module.exports = class UserSession extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                unique: true,
                primaryKey: true,
                autoIncrement: true
            },
            key: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            expire_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            status: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
            create_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW
            },
            update_at: {
                type: Sequelize.DATE,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'UserSession',
            tableName: 'user_session',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.UserSession.belongsTo(db.User, { foreignKey: 'user_id', sourceKey: 'user_id'})
    }
}