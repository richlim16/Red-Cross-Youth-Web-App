'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('committees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      council_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'councils', 
          key: 'id',
        }
      },
      type: {
        type: Sequelize.ENUM('DRRM', 'Pledge 25', 'Trainings', 'Council Dev', 'YAPE', 'YPE', 'Health Services', 'Welfare', 'Awards and Recognition', 'Safety')
      },
      chairperson_id: {
        type: Sequelize.BIGINT
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