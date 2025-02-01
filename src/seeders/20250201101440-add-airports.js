'use strict';

/** @type {import('sequelize-cli').Migration} */
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
   await queryInterface.bulkInsert('Airports', [
     {
       name: 'Kempegowda international Airport',
       cityId: 7,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      name: 'Mysuru Airport',
      cityId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mengaluru international Airport',
      cityId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'indira Gandhi international Airport',
      cityId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }
     
   ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
