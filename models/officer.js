'use strict';
const {DataTypes, DATE} = require('sequelize');
const connection = require('../dbconnection');


const officer = connection.sequelize.define('officer', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  user_id: DataTypes.BIGINT,
  membership_form_id: DataTypes.BIGINT,
  position: DataTypes.ENUM('President', 'Vice President', 'Secretary', 'Assistant Secretary', 'Treasurer', 'Auditor', 'PRO Internal', 'PRO External', 'DRRM', 'Pledge 25', 'Trainings', 'Council Dev', 'YAPE', 'YPE', 'Health Services', 'Welfare', 'Awards and Recognition', 'Safety'),
  head_of: DataTypes.BIGINT
});


exports.model = officer;












// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class officer extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   officer.init({
//     membership_form_id: DataTypes.BIGINT,
//     committee_id: DataTypes.BIGINT,
//     position: DataTypes.ENUM('')
//   }, {
//     sequelize,
//     modelName: 'officer',
//   });
//   return officer;
// };