const Sequelize = require('sequelize');

class Classification extends Sequelize.Model {
  static initiate(sequelize) {
    Classification.init({
      name: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: 'Classification',
      tableName: 'classifications',
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
     
  }
};

module.exports = Classification;
