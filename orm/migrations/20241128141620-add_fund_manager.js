/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('funds', 'manager', {
      type: Sequelize.JSON,
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('funds', 'manager')
  },
}
