module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('funds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      isWhitelisted: {
        type: Sequelize.BOOLEAN,
      },
      logoImg: {
        type: Sequelize.UUID,
      },
      description: {
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
    await queryInterface.dropTable('funds')
  },
}
