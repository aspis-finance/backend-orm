module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('funds', 'isWhitelisted')
    await queryInterface.addColumn('funds', 'isWhitelisted', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('funds')
  },
}
