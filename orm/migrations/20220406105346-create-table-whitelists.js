module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('whitelists', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        default: Sequelize.UUIDV4,
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
