const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Pools extends Model {
    /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
    static associate(model) {
      Pools.hasMany(model.whitelists)
    }
  }
  Pools.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      iconSource: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      recieverAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      feeAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      investmentTokenAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      swapCurrency: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      chainCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      minimumInvestment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      maximumInvestment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      investLimit: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      feePercentage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      investStartTime: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
      investEndTime: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
      tokenSymbol: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      swapRatio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      projectName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      projectDescription: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      securityChecks: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      website: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      docs: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      twitter: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      telegram: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      medium: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      whitelistRequired: {
        type: DataTypes.BOOLEAN,
      },
      whitelistUrl: {
        allowNull: true,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'pools',
      tableName: 'pools',
    },
  )
  return Pools
}
