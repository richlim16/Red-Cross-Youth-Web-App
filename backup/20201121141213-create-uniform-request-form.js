'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('uniform_request_forms', {
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
      chapter_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'chapters', 
          key: 'id',
        }
      },
      uniform_type: {
        type: Sequelize.ENUM('A','C')
      },
      date_requested: {
        type: Sequelize.DATE
      },
      volunteer: {
        type: Sequelize.BIGINT
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      receipt_no: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      or_number: {
        type: Sequelize.STRING
      },
      qty: {
        type: Sequelize.BIGINT
      },
      claimed_on: {
        type: Sequelize.DATE
      },
      released_by: {
        type: Sequelize.BIGINT
      },
      council_pres_sig: {
        type: Sequelize.BOOLEAN
      },
      council_adv_sig: {
        type: Sequelize.BOOLEAN
      },
      chapter_bookkeeper_sig: {
        type: Sequelize.BOOLEAN
      },
      treasurer_sig: {
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
    await queryInterface.dropTable('uniform_request_forms');
  }
};