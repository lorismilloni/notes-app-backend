module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'Tags',
    [
      {
      },
      {
      },
    ],

    {},
  ),
  down: async (queryInterface) => queryInterface.bulkDelete('NotesTags', null, {}),
};
