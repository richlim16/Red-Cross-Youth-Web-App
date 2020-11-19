'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('activity_request_forms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      council_id: {
        type: Sequelize.BIGINT
      },
      cyc_id: {
        type: Sequelize.BIGINT
      },
      member_id: {
        type: Sequelize.BIGINT
      },
      activity_name: {
        type: Sequelize.STRING
      },
      date_filed: {
        type: Sequelize.DATE
      },
      objectives: {
        type: Sequelize.TEXT
      },
      date_time: {
        type: Sequelize.DATE
      },
      venue: {
        type: Sequelize.STRING
      },
      participating_components: {
        type: Sequelize.TEXT
      },
      rcys_invlved: {
        type: Sequelize.INTEGER
      },
      committee_chairpersons: {
        type: Sequelize.STRING
      },
      committee_involved: {
        type: Sequelize.STRING
      },
      submitted_by_pres: {
        type: Sequelize.BIGINT
      },
      submitted_by_adv: {
        type: Sequelize.BIGINT
      },
      noted_by_chair: {
        type: Sequelize.BIGINT
      },
      noted_by_pres: {
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
      council_adv_sig: {
        type: Sequelize.BOOLEAN
      },
      cyc_chairperson_sig: {
        type: Sequelize.BOOLEAN
      },
      cyc_president_sig: {
        type: Sequelize.BOOLEAN
      },
      received_by_sig: {
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
    await queryInterface.dropTable('activity_request_forms');
  }
};