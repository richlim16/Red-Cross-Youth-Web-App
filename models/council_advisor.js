'use strict';
const {DataTypes, DATE} = require('sequelize');
const connection = require('../dbconnection');


const councilAdvisor = connection.sequelize.define('council_advisor', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  user_id: DataTypes.BIGINT,
  council_id: DataTypes.BIGINT
});


exports.model = councilAdvisor;


















// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class council_advisor extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   council_advisor.init({
//     user_id: DataTypes.BIGINT,
//     council_id: DataTypes.BIGINT
//   }, {
//     sequelize,
//     modelName: 'council_advisor',
//   });
//   return council_advisor;
// };