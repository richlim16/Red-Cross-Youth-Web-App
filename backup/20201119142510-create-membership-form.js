'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('membership_forms', {
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
      blood_type: {
        type: Sequelize.STRING
      },
      rcy_id: {
        type: Sequelize.BIGINT
      },
      committee_membership_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'committees', 
          key: 'id',
        }
      },
      surname: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      middle_name: {
        type: Sequelize.STRING
      },
      nickname: {
        type: Sequelize.STRING
      },
      birthdate: {
        type: Sequelize.DATE
      },
      age: {
        type: Sequelize.INTEGER
      },
      civil_satus: {
        type: Sequelize.ENUM('SINGLE', 'MARRIED')
      },
      height: {
        type: Sequelize.FLOAT
      },
      weight: {
        type: Sequelize.FLOAT
      },
      nationality: {
        type: Sequelize.STRING
      },
      religion: {
        type: Sequelize.STRING
      },
      contact_no: {
        type: Sequelize.STRING
      },
      city_address: {
        type: Sequelize.STRING
      },
      city_tel: {
        type: Sequelize.STRING
      },
      provincial_address: {
        type: Sequelize.STRING
      },
      provincial_tel: {
        type: Sequelize.STRING
      },
      ailments: {
        type: Sequelize.STRING
      },
      allergies: {
        type: Sequelize.STRING
      },
      hobbies: {
        type: Sequelize.STRING
      },
      special_skills: {
        type: Sequelize.STRING
      },
      fathers_name: {
        type: Sequelize.STRING
      },
      fathers_occupation: {
        type: Sequelize.STRING
      },
      fathers_address: {
        type: Sequelize.STRING
      },
      fathers_tel: {
        type: Sequelize.STRING
      },
      mothers_name: {
        type: Sequelize.STRING
      },
      mothers_occupation: {
        type: Sequelize.STRING
      },
      mothers_address: {
        type: Sequelize.STRING
      },
      mothers_tel: {
        type: Sequelize.STRING
      },
      guardians_name: {
        type: Sequelize.STRING
      },
      guardians_occupation: {
        type: Sequelize.STRING
      },
      guardians_address: {
        type: Sequelize.STRING
      },
      guardians_tel: {
        type: Sequelize.STRING
      },
      present_school: {
        type: Sequelize.STRING
      },
      course: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      school_address: {
        type: Sequelize.STRING
      },
      elementary_school: {
        type: Sequelize.STRING
      },
      elementary_attainment: {
        type: Sequelize.DATE
      },
      secondary_school: {
        type: Sequelize.STRING
      },
      secondary_attainment: {
        type: Sequelize.DATE
      },
      college_school: {
        type: Sequelize.STRING
      },
      college_attainment: {
        type: Sequelize.DATE
      },
      vocational_school: {
        type: Sequelize.STRING
      },
      vocational_attainment: {
        type: Sequelize.DATE
      },
      date_filed: {
        type: Sequelize.DATE
      },
      member_sig: {
        type: Sequelize.BOOLEAN
      },
      council_pres_sig: {
        type: Sequelize.BOOLEAN
      },
      council_adv_sig: {
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
    await queryInterface.dropTable('membership_forms');
  }
};