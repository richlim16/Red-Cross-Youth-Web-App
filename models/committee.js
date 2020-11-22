'use strict';
const {DataTypes, DATE} = require('sequelize');
const connection = require('../dbconnection');


const committee = connection.sequelize.define('committee', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  council_id: DataTypes.BIGINT,
  type: DataTypes.ENUM(''),
  chairperson_id: DataTypes.BIGINT,
  no_of_members: DataTypes.INTEGER
});


exports.model = committee;




















// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class committee extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   committee.init({
//     council_id: DataTypes.BIGINT,
//     type: DataTypes.ENUM(''),
//     chairperson_id: DataTypes.BIGINT,
//     no_of_members: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'committee',
//   });
//   return committee;
// };