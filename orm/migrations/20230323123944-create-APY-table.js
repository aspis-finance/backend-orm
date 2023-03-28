module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'APY',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        fundId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'funds',
            key: 'id',
          },
        },
        twentyFourHours: {
          type: Sequelize.STRING,
        },
        sevenDays: {
          type: Sequelize.STRING,
        },
        total: {
          type: Sequelize.STRING,
        },
        lpTokenPrice: {
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
      },
    )
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('APY')
  },
}
