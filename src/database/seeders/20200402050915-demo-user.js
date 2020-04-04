'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Michael',
        lastName: 'Jackson',
        email: 'michael.jackson@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        firstName: 'Stan',
        lastName: 'Lee',
        email: 'stan.lee@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};