module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'Tags',
    [
      {
        name: 'casa',
        campo: '',
      },
      {
        name: 'trabalho',
        campo: '',
      },
    ],

    {},
  ),
  down: async (queryInterface) => queryInterface.bulkDelete('Tags', null, {}),
};
