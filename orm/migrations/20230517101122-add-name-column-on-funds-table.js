'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('funds', 'name', {
      type: Sequelize.STRING,
      allowNull: true,
    })
  },
  async down (queryInterface) {
    await queryInterface.removeColumn('funds', 'name')
  }
};
