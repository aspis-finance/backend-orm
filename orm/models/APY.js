const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class APY extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(model) {
      APY.belongsTo(model.funds)
    }
  }
  APY.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      twentyFourHours: {
        type: DataTypes.INTEGER,
      },
      sevenDays: {
        type: DataTypes.INTEGER,
      },
      total: {
        type: DataTypes.INTEGER,
      },
      lpTokenPrice: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'APY',
      tableName: 'APY',
    }
  )
  return APY
}
