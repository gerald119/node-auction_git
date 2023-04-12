const Sequelize = require('sequelize');

class AuctionType extends Sequelize.Model {
  static initiate(sequelize) {
    AuctionType.init({
      name: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: 'AuctionType',
      tableName: 'auctionTypes',
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    
  }
};

module.exports = AuctionType;
