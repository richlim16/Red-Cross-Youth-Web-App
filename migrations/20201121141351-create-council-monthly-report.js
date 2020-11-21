'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('council_monthly_reports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      council_id: {
        type: Sequelize.BIGINT
      },
      document_id: {
        type: Sequelize.BIGINT
      },
      for_the_month_of: {
        type: Sequelize.DATE
      },
      nature_of_activity: {
        type: Sequelize.STRING
      },
      accomplishments: {
        type: Sequelize.STRING
      },
      objective: {
        type: Sequelize.STRING
      },
      no_of_rcy_participants: {
        type: Sequelize.BIGINT
      },
      remarks: {
        type: Sequelize.STRING
      },
      prepared_by: {
        type: Sequelize.BIGINT
      },
      submitted_by: {
        type: Sequelize.BIGINT
      },
      noted_by: {
        type: Sequelize.BIGINT
      },
      approved_by: {
        type: Sequelize.BIGINT
      },
      school_council_sec_sig: {
        type: Sequelize.BOOLEAN
      },
      school_council_pres_sig: {
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
    await queryInterface.dropTable('council_monthly_reports');
  }
};