module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'assets',
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
        address: {
          type: Sequelize.STRING,
        },
        symbol: {
          type: Sequelize.STRING,
        },
        decimals: {
          type: Sequelize.STRING,
        },
        balance: {
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
    await queryInterface.dropTable('assets')
  },
}
