'use strict';
const {DataTypes, DATE} = require('sequelize');
const connection = require('../dbconnection');


const document = connection.sequelize.define('document', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  type: DataTypes.ENUM('MEMBERSHIP', 'COMMITTEE_MEMBERSHIP', 'ACTIVITY_REQUEST', 'ACTIVITY_REPORT', 'UNIFORM_REQUEST', 'SERVICE_REQUEST', 'COUNCIL_MONTHLY_REPORT'),
  chapter_id: DataTypes.BIGINT,
  council_id: DataTypes.BIGINT
});


exports.model = document;
















// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class document extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   document.init({
//     type: DataTypes.ENUM,
//     chapter_id: DataTypes.BIGINT,
//     council_id: DataTypes.BIGINT
//   }, {
//     sequelize,
//     modelName: 'document',
//   });
//   return document;
// };
