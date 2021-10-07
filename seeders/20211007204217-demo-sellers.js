'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Sellers', [
      {
        sellerName: "Binny's",
      },
      {
        sellerName: "Eataly",
      },
      {
        sellerName: "Hy-Vee",
      },
      {
        sellerName: "Casa Emma",
      },
      {
        sellerName: "Cocchi",
      },
      {
        sellerName: "Bava",
      },
      {
        sellerName: "Il Cocco",
      },
      {
        sellerName: "Casaloeste",
      },
      {
        sellerName: "Castello di Albola",
      },
      {
        sellerName: "Cantine Neri",
      },
      {
        sellerName: "Parusso",
      },
      {
        sellerName: "Ste Michele Vineyards",
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
