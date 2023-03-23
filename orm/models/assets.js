const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Assets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(model) {
      Assets.belongsTo(model.funds)
    }
  }
  Assets.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
      },
      symbol: {
        type: DataTypes.STRING,
      },
      decimals: {
        type: DataTypes.INTEGER,
      },
      balance: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'assets',
      tableName: 'assets',
    }
  )
  return Assets
}
