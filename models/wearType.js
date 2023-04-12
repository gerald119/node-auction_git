const Sequelize = require('sequelize');

class WearType extends Sequelize.Model {
  static initiate(sequelize) {
    WearType.init({
      name: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: 'WearType',
      tableName: 'Weartypes',
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.WearType.belongsTo(db.WearMaker);
  }
};

module.exports = WearType;
