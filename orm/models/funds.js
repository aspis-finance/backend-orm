const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Funds extends Model {
    /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
    static associate(model) {
      Funds.belongsTo(model.pools)
    }
  }
  Funds.init(
    {
      address: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      isWhitelisted: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'funds',
      tableName: 'funds',
    },
  )
  return Funds
}
