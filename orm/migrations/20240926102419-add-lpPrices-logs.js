/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('LPPrices', 'data', {
      type: Sequelize.JSON,
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('LPPrices', 'data')
  },
}
