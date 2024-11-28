/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('funds', 'manager', {
      type: Sequelize.STRING,
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('funds', 'manager')
  },
}
