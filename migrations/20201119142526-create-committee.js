'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('committees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      council_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'council', 
          key: 'id',
        }
      },
      type: {
        type: Sequelize.STRING
      },
      chairperson_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'officer', 
          key: 'id',
        }
      },
      no_of_members: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('committees');
  }
};