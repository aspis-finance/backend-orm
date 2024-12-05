module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('funds', 'manager', {
      type: Sequelize.STRING,
      allowNull: true,
    })
  },
  async down(queryInterface) {
    await queryInterface.removeColumn('funds', 'manager')
  },
}
