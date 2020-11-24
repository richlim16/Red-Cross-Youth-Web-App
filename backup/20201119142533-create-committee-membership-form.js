'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('committee_membership_forms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      document_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'documents', 
          key: 'id',
        }
      },
      committee_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'committees', 
          key: 'id',
        }
      },
      prepared_by: {
        type: Sequelize.BIGINT
      },
      noted_by: {
        type: Sequelize.BIGINT
      },
      submitted_by: {
        type: Sequelize.BIGINT
      },
      date_filed: {
        type: Sequelize.DATE
      },
      school_council_sec_sig: {
        type: Sequelize.BOOLEAN
      },
      school_council_adv_sig: {
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
    await queryInterface.dropTable('committee_membership_forms');
  }
};