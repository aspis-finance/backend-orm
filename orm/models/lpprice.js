const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class LPPrice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(model) {
      LPPrice.belongsTo(model.funds)
    }
  }
  LPPrice.init(
    {
      time: DataTypes.DATE,
      price: DataTypes.STRING,
      fundId: DataTypes.STRING,
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
      modelName: 'LPPrice',
    },
  )
  return LPPrice
}
