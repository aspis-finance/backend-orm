module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('whitelists', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
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
