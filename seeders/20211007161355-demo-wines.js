'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Wines', [
      {
        name: "Barbera",
        producerId: 1,
        year: "2016",
        price: "15.99",
        quantity: "1",
        tastingId:  1,
        rating: "4.0",
        color: "Red",
        countryId: 1,
        sellerId: 1,
        generalNotes: ""
      },
      {
        name: "Barolo",
        producerId: 2,
        year: "2017",
        price: "35.99",
        quantity: "2",
        tastingId:  2,
        rating: "4.3",
        color: "Red",
        countryId: 2,
        sellerId: 2,
        generalNotes: "Taste great"
      },
      {
        name: "Moscato D'Asti",
        producerId: 3,
        year: "2018",
        price: "14.99",
        quantity: "5",
        rating: "3.9",
        tastingId:  3,
        color: "White",
        countryId: 3,
        sellerId: 3,
        generalNotes: "Sweet and Bubbly"
      },
      
    ], {});
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
