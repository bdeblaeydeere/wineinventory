'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Countries', [
      {
        countryName: "Italy",
      },
      {
        countryName: "France",
      },
      {
        countryName: "United States",
      },
      {
        countryName: "Austrailia",
      },
      {
        countryName: "Spain",
      },
      
    ], {} );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
