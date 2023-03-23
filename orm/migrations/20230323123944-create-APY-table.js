module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'APY',
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
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
          type: Sequelize.INTEGER,
        },
        sevenDays: {
          type: Sequelize.INTEGER,
        },
        total: {
          type: Sequelize.INTEGER,
        },
        lpTokenPrice: {
          type: Sequelize.INTEGER,
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
