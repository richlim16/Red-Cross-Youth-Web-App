'use strict';
const {DataTypes, DATE} = require('sequelize');
const connection = require('../dbconnection');

const membershipForm = connection.sequelize.define('membership_form', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  document_id: DataTypes.BIGINT,
  blood_type: DataTypes.STRING,
  rcy_id: DataTypes.BIGINT,
  committee_membership_id: DataTypes.BIGINT,
  surname: DataTypes.STRING,
  first_name: DataTypes.STRING,
  middle_name: DataTypes.STRING,
  nickname: DataTypes.STRING,
  birthdate: DataTypes.DATE,
  age: DataTypes.INTEGER,
  civil_status: DataTypes.ENUM('SINGLE', 'MARRIED'),
  height: DataTypes.FLOAT,
  weight: DataTypes.FLOAT,
  nationality: DataTypes.STRING,
  religion: DataTypes.STRING,
  contact_no: DataTypes.STRING,
  city_address: DataTypes.STRING,
  city_tel: DataTypes.STRING,
  provincial_address: DataTypes.STRING,
  provincial_tel: DataTypes.STRING,
  ailments: DataTypes.STRING,
  allergies: DataTypes.STRING,
  hobbies: DataTypes.STRING,
  special_skills: DataTypes.STRING,
  fathers_name: DataTypes.STRING,
  fathers_occupation: DataTypes.STRING,
  fathers_address: DataTypes.STRING,
  fathers_tel: DataTypes.STRING,
  mothers_name: DataTypes.STRING,
  mothers_occupation: DataTypes.STRING,
  mothers_address: DataTypes.STRING,
  mothers_tel: DataTypes.STRING,
  present_school: DataTypes.STRING,
  guardians_name: DataTypes.STRING,
  guardians_occupation: DataTypes.STRING,
  guardians_address: DataTypes.STRING,
  guardians_tel: DataTypes.STRING,
  present_school: DataTypes.STRING,
  course: DataTypes.STRING,
  year: DataTypes.INTEGER,
  school_address: DataTypes.STRING,
  elementary_school: DataTypes.STRING,
  elementary_attainment: DataTypes.DATE,
  secondary_school: DataTypes.STRING,
  secondary_attainment: DataTypes.DATE,
  college_school: DataTypes.STRING,
  college_attainment: DataTypes.DATE,
  vocational_school: DataTypes.STRING,
  vocational_attainment: DataTypes.DATE,
  member_sig: DataTypes.BOOLEAN,
  council_pres_sig: DataTypes.BOOLEAN,
  council_adv_sig: DataTypes.BOOLEAN
});

membershipForm.associate = models => {
  membershipForm.belongsTo(models.committee),
  membershipForm.belongsTo(models.document);
};

exports.model = membershipForm;