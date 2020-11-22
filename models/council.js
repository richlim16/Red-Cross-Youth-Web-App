'use strict';
const {DataTypes, DATE} = require('sequelize');
const connection = require('../dbconnection');


const council = connection.sequelize.define('council', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  chapter_id: DataTypes.BIGINT,
  category: DataTypes.ENUM(''),
  name: DataTypes.STRING
});


exports.model = council;















// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class council extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   council.init({
//     chapter_id: DataTypes.BIGINT,
//     category: DataTypes.ENUM(''),
//     name: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'council',
//   });
//   return council;
// };