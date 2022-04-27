module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pools', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      chainCode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      claimAllocationAddress: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      claimAllocationAmount: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      claimAllocationInitPercent: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      claimAllocationMonthlyPercent: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      claimStartTime: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      enabled: {
        type: Sequelize.BOOLEAN,
      },
      feeAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      feePercent: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      iconSrc: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      investFinishTime: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
      investLimit: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      investStartTime: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
      projectDescription: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      projectLinks: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
      projectName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      receiverAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      securityChecks: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      swapCurrency: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      swapRatio: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tokenAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tokenSymbol: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userMaxInvest: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      userMinInvest: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      whitelistRequired: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      whitelistUrl: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('pools')
  },
}
