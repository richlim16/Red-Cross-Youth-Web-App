'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('chapter_personnels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      chapter_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'chapters', 
          key: 'id',
        }
      },
      position: {
        type: Sequelize.ENUM('Chapter Admin', 'Chapter Youth Advisor')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('chapter_personnels');
  }
};