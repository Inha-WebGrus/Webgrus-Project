const Sequelize = require('sequelize')

module.exports = class EmailVerification extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                unique: true,
                primaryKey: true
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            auth_code: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            status: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: 0
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
            modelName: 'EmailVerification',
            tableName: 'email_verification',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }
}