'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('service_request_forms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      document_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'documents', 
          key: 'id',
        }
      },
      receiver: {
        type: Sequelize.STRING
      },
      name_of_activity: {
        type: Sequelize.STRING
      },
      council_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'councils', 
          key: 'id',
        }
      },
      requesting_person: {
        type: Sequelize.BIGINT
      },
      position: {
        type: Sequelize.STRING
      },
      requesting_for: {
        type: Sequelize.STRING
      },
      purposes: {
        type: Sequelize.STRING
      },
      date_and_time: {
        type: Sequelize.DATE
      },
      venue: {
        type: Sequelize.STRING
      },
      submitted_by_pres: {
        type: Sequelize.BIGINT
      },
      submitted_by_advisor: {
        type: Sequelize.BIGINT
      },
      noted_by_cyc1: {
        type: Sequelize.BIGINT
      },
      noted_by_cyc2: {
        type: Sequelize.BIGINT
      },
      received_by: {
        type: Sequelize.BIGINT
      },
      date_received: {
        type: Sequelize.DATE
      },
      council_pres_sig: {
        type: Sequelize.BOOLEAN
      },
      cyc_chairperson_sig: {
        type: Sequelize.BOOLEAN
      },
      council_adv_sig: {
        type: Sequelize.BOOLEAN
      },
      cyc_pres_sig: {
        type: Sequelize.BOOLEAN
      },
      chapter_service_rep_sig: {
        type: Sequelize.BOOLEAN
      },
      chapter_admin_sig: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('service_request_forms');
  }
};