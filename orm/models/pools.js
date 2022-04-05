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
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      chainCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      claimAllocationAddress: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      claimAllocationAmount: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      claimAllocationInitPercent: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      claimAllocationMonthlyPercent: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      claimStartTime: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      enabled: {
        type: DataTypes.BOOLEAN,
      },
      feeAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      feePercent: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      iconSrc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      investFinishTime: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
      investLimit: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      investStartTime: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
      projectDescription: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      projectLinks: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      projectName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      receiverAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      securityChecks: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      swapCurrency: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      swapRatio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tokenAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tokenSymbol: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userMaxInvest: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userMinInvest: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      whitelistRequired: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
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
    }
  )
  return Pools
}
