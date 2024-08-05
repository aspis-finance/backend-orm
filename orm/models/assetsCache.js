const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class AssetsCache extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(model) {
      AssetsCache.belongsTo(model.funds)
    }
  }
  AssetsCache.init(
    {
      address: {
        type: DataTypes.STRING,
      },
      symbol: {
        type: DataTypes.STRING,
      },
      decimals: {
        type: DataTypes.STRING,
      },
      balance: {
        type: DataTypes.STRING,
      },
      value: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'assetsCache',
      tableName: 'assetsCache',
    },
  )
  return AssetsCache
}
