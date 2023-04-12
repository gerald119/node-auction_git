const Sequelize = require('sequelize');

class BikeModel extends Sequelize.Model {
  static initiate(sequelize) {
    BikeModel.init({
      name: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: 'BikeModel',
      tableName: 'bikemodels',
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.BikeModel.belongsTo(db.BikeMaker);
  }
};

module.exports = BikeModel;
