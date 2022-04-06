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
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
