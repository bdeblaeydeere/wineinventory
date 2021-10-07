'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Notes', [
      {
        name: "Cherry",
      },
      {
        name: "Vanilla",
      },
      {
        name: "Oak",
      },
      {
        name: "Earthy",
      },
      {
        name: "Tobacco",
      },
      {
        name: "Chocolate",
      },
      {
        name: "Citrus",
      },
      {
        name: "Apple",
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
