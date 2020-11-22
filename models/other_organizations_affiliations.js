'use strict';
const {DataTypes, DATE} = require('sequelize');
const connection = require('../dbconnection');


const otherOrganizationsAffiliations = connection.sequelize.define('other_organizations_affiliations', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  membership_form_id: DataTypes.BIGINT,
  organization: DataTypes.STRING,
  position: DataTypes.STRING,
  council: DataTypes.STRING,
  start_date: DataTypes.DATE,
  end_date: DataTypes.DATE
});


exports.model = otherOrganizationsAffiliations;










// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class other_organizations_affiliations extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   other_organizations_affiliations.init({
//     membership_form_id: DataTypes.BIGINT,
//     organization: DataTypes.STRING,
//     position: DataTypes.STRING,
//     council: DataTypes.STRING,
//     start_date: DataTypes.DATE,
//     end_date: DataTypes.DATE
//   }, {
//     sequelize,
//     modelName: 'other_organizations_affiliations',
//   });
//   return other_organizations_affiliations;
// };