const Sequelize = require('sequelize');

class  MotoBike extends Sequelize.Model {
  static initiate(sequelize) {
    MotoBike.init({
      maker: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      model: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: 'MotoBike',
      tableName: 'motobikes',
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
  }
};

module.exports = MotoBike;
