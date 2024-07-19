module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('funds', 'chainId', {
      type: Sequelize.INTEGER,
      allowNull: true,
    })
  },
  async down(queryInterface) {
    await queryInterface.removeColumn('funds', 'chainId')
  },
}
