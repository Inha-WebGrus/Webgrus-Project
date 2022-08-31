const Sequelize = require('sequelize');


module.exports = class Place extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            adress: {
                type: Sequelize.STRING(255),
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
            modelName: 'Place',
            tableName: 'places',
            paranoid:false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.Place.hasMany(db.PlaceReview, {foreignKey: 'place_id', sourceKey: 'id'});
        db.Place.hasMany(db.Userzzim, {foreignKey: 'place_id', sourceKey: 'id'});
    }
};