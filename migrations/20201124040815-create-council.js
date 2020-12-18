'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('councils', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      user_id: {
        type: Sequelize.BIGINT
      },
      chapter_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'chapters', 
          key: 'id',
        }
      },
      category: {
        type: Sequelize.ENUM('Junior Red Cross Youth', 'Senior Red Cross Youth', 'Senior Plus Red Cross Youth', 'College Red Cross Youth', 'Community Red Cross Youth')
      },
      name: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('councils');
  }
};