'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('users', [
      {
        email: 'info@aspis.finance',
        password: '',
        firstName: 'ASPIS',
        lastName: 'Guardians',
        DOB: '01/01/2008',
        address: 'Moskva',
        phone: '+712341234',
        createdAt: "2023-05-08 16:49:15.151 +0200",
        updatedAt: "2023-05-08 16:49:15.151 +0200"
      },
      {
        email: 'g@aspis.finance',
        password: '',
        firstName: 'ASPIS',
        lastName: 'G',
        DOB: '01/01/2008',
        address: 'Moskva',
        phone: '+712341234',
        createdAt: "2023-05-08 16:49:15.151 +0200",
        updatedAt: "2023-05-08 16:49:15.151 +0200"
      },
    ], {})
  },

  async down (queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
    */

    await queryInterface.bulkDelete('users', null, {})
  }
};
