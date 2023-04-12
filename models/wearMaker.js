const Sequelize = require('sequelize');

class WearMaker extends Sequelize.Model {
  static initiate(sequelize) {
    WearMaker.init({
      name: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: 'WearMaker',
      tableName: 'wearmakers',
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.WearMaker.hasMany(db.BikeModel);
  }
};

module.exports = WearMaker;
