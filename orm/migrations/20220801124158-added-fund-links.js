module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('funds', 'links', {
      type: Sequelize.JSONB,
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('funds')
  },
}
