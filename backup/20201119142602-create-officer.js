'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('officers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      user_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'users', 
          key: 'id',
        }
      },
      position: {
        type: Sequelize.ENUM('President', 'Vice President', 'Secretary', 'Assistant Secretary', 'Treasurer', 'Auditor', 'PRO Internal', 'PRO External', 'DRRM', 'Pledge 25', 'Trainings', 'Council Dev', 'YAPE', 'YPE', 'Health Services', 'Welfare', 'Awards and Recognition', 'Safety')
      },
      head_of: {
        type: Sequelize.BIGINT,
        references: {
          model: 'committees', 
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
    await queryInterface.dropTable('officers');
  }
};