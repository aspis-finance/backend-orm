const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Funds extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(model) {
      // Relations are here
      Funds.hasMany(model.assets)
      Funds.hasMany(model.assetsCache)
      Funds.hasMany(model.APY)
    }
  }
  Funds.init(
    {
      address: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      name: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      isWhitelisted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      logoImg: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      links: {
        type: DataTypes.JSONB,
      },
      chainId: {
        type: DataTypes.INTEGER,
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
