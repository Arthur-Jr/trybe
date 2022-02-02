'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('books', [
      {
        "title": "New Book",
        "author": "eu",
        "pageQuantity": 100,
        "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
        "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        "title": "New Book",
        "author": "eu",
        "pageQuantity": 50,
        "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
        "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ]);
  },

  async down (queryInterface, _Sequelize) {
    return queryInterface.bulkDelete('books', null, {});
  }
};
