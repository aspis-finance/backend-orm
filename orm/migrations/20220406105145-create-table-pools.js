module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pools', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      iconSource: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      recieverAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      feeAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      investmentTokenAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      swapCurrency: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      chainCode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      minimumInvestment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      maximumInvestment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      investLimit: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      feePercentage: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      investStartTime: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
      investEndTime: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
      tokenSymbol: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      swapRatio: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      projectName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      projectDescription: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      securityChecks: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      projectLinks: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
      whitelistRequired: {
        type: Sequelize.BOOLEAN,
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
