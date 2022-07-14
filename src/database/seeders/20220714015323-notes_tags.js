module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'NotesTags',
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
