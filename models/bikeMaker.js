const Sequelize = require('sequelize');

class BikeMaker extends Sequelize.Model {
  static initiate(sequelize) {
    BikeMaker.init({
      name: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: 'BikeMaker',
      tableName: 'bikemakers',
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.BikeMaker.hasMany(db.BikeModel);
  }
};

module.exports = BikeMaker;
