const Sequelize = require('sequelize');


module.exports = class Place_review extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            place_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },
            user_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            rate: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            created_at: {
                type: 'TIMESTAMP',
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false,
              },
              updated_at: {
                type: 'TIMESTAMP',
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: true,
              }
        }, 
        {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'PlaceReview',
            tableName: 'place_reviews',
            paranoid:false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.PlaceReview.belongsTo(db.User, {foreignKey: 'user_id', targetKey: 'id'});
        db.PlaceReview.belongsTo(db.Place, {foreignKey: 'place_id', targetKey: 'id'});
    }
};