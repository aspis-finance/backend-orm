const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Whitelists extends Model {
    /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
    static associate(model) {
      Whitelists.belongsTo(model.pools)
    }
  }
  Whitelists.init(
    {
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'whitelists',
      tableName: 'whitelists',
    },
  )
  return Whitelists
}
