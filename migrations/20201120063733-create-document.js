'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('documents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      type: {
        type: Sequelize.ENUM('MEMBERSHIP', 'COMMITTEE_MEMBERSHIP', 'ACTIVITY_REQUEST', 'ACTIVITY_REPORT', 'UNIFORM_REQUEST', 'SERVICE_REQUEST', 'COUNCIL_MONTHLY_REPORT')
      },
      chapter_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'chapters', 
          key: 'id',
        }
      },
      council_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'councils', 
          key: 'id',
        }
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
    await queryInterface.dropTable('documents');
  }
};