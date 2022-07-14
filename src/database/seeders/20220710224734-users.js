module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        name: 'Fernando',
        lastname: 'Ribeiro',
        email: 'flsr.dev@gmail.com',
        passwordHash: 'password',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Loris',
        lastname: 'Simon',
        email: 'lorismsimon@gmail.com',
        passwordHash: 'password',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ],

    {},
  ),
  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
