'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('trainings_attended', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      membership_form_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'membership_form', 
          key: 'id',
        }
      },
      certificate_no: {
        type: Sequelize.STRING
      },
      service: {
        type: Sequelize.STRING
      },
      training_attended: {
        type: Sequelize.STRING
      },
      place: {
        type: Sequelize.STRING
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('trainings_attended');
  }
};