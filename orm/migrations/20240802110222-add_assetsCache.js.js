module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'assetsCache',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
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
        value: {
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
    await queryInterface.dropTable('assetsCache')
  },
}
