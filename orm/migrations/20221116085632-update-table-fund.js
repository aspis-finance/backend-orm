module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('funds', 'description')
    await queryInterface.addColumn('funds', 'description', {
      type: Sequelize.TEXT,
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('funds')
  },
}
