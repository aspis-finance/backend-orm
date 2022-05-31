const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Funds extends Model {
    /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
    static associate() {
    // Relations are here
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
      logoImg: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
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
