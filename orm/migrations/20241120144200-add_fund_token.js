module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('funds', 'token', {
      type: Sequelize.STRING,
      allowNull: true,
    })
  },
  async down(queryInterface) {
    await queryInterface.removeColumn('funds', 'token')
  },
}
