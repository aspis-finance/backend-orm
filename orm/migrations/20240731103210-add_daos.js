module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'daosCache',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        address: {
          type: Sequelize.STRING,
        },
        chainId: {
          type: Sequelize.INTEGER,
        },
        data: {
          type: Sequelize.JSON,
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
    await queryInterface.dropTable('daosCache')
  },
}
