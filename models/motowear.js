const Sequelize = require('sequelize');

class MotoWear extends Sequelize.Model {
  static initiate(sequelize) {
    MotoWear.init({
      maker: {
        type: Sequelize.STRING(40),
        allowNull: true,
      },
      type: {
        type: Sequelize.STRING(40),
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: 'MotoWear',
      tableName: 'motowears',
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
  }
};

module.exports = MotoWear;
