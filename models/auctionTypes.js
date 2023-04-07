const Sequelize = require('sequelize');

class AuctionTypes extends Sequelize.Model {
  static initiate(sequelize) {
    AuctionTypes.init({
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
    // db.Good.belongsTo(db.User, { as: 'Owner' });
    // db.Good.belongsTo(db.User, { as: 'Sold' });
    // db.Good.hasMany(db.Auction);
  }
};

module.exports = AuctionTypes;
