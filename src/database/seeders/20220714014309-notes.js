module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Notes',
    [
      {
        title: 'Compras',
        content: 'tomates, bananas, carne barata, cerveja lata, batatas',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'tarefas do dia',
        content: 'requisito 2 blogs api, conteúdo de liderança soft-skills, academia, ensaiar pitch',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'séries',
        content: 'westworld ep 4 dia 18',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ],
    {},
  ),
  down: async (queryInterface) => queryInterface.bulkDelete('Notes', null, {}),
};
