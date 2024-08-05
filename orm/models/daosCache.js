const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class DaosCache extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(model) {
    //   Daos.belongsTo(model.funds)
    // }
  }
  DaosCache.init(
    {
      address: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      chainId: {
        type: DataTypes.INTEGER,
      },
      data: {
        type: DataTypes.JSON,
        get() {
          return JSON.parse(this.getDataValue('data'))
        },
        set(data) {
          this.setDataValue('data', JSON.stringify(data))
        },
      },
    },
    {
      sequelize,
      modelName: 'daosCache',
      tableName: 'daosCache',
    },
  )
  return DaosCache
}
