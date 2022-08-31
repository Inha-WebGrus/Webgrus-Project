const Sequelize = require('sequelize');


module.exports = class Favorite extends Sequelize.Model {
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
            modelName: 'Userzzim',
            tableName: 'user_zzims',
            paranoid:false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.Userzzim.belongsTo(db.User, {foreignKey: 'user_id', targetKey: 'id'});
        db.Userzzim.belongsTo(db.Place, {foreignKey: 'place_id', targetKey: 'id'});
    }
};