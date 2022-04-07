module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('whitelists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      poolId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'pools',
          key: 'id',
        },
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('whitelists')
  },
}
