'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Producers', [
      {
        producerName: "Casa Emma",
      },
      {
        producerName: "Cocchi",
      },
      {
        producerName: "Bava",
      },
      {
        producerName: "Il Cocco",
      },
      {
        producerName: "Casaloeste",
      },
      {
        producerName: "Castello di Albola",
      },
      {
        producerName: "Cantine Neri",
      },
      {
        producerName: "Parusso",
      },
      {
        producerName: "Ste Michele Vineyards",
      }
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
