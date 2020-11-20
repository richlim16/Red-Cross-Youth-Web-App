'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('committee_membership_forms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      committee_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'committee', 
          key: 'id',
        }
      },
      prepared_by: {
        type: Sequelize.BIGINT,
        references: {
          model: 'officer', 
          key: 'id',
        }
      },
      noted_by: {
        type: Sequelize.BIGINT,
        references: {
          model: 'council_advisor', 
          key: 'id',
        }
      },
      submitted_by: {
        type: Sequelize.BIGINT,
        references: {
          model: 'officer', 
          key: 'id',
        }
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