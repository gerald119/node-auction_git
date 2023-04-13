const Sequelize = require('sequelize');

class MotoPart extends Sequelize.Model {
  static initiate(sequelize) {
    MotoPart.init({
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
      modelName: 'MotoPart',
      tableName: 'motoparts',
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    
  }
};

module.exports = MotoPart;
