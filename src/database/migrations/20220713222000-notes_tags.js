module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('NotesTags', {
      noteId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'Notes',
          key: 'id',
        },
      },
      tagId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'Tags',
          key: 'id',
        },
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('NotesTags');
  },
};
