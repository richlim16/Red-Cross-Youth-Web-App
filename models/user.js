'use strict';
const {DataTypes, DATE} = require('sequelize');
const connection = require('../dbconnection');


const User = connection.sequelize.define('user', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  membership_form_id: DataTypes.BIGINT,
  type: DataTypes.ENUM('Chapter Admin', 'Chapter Youth Advisor', 'Council', 'Council Advisor')
});


exports.model = User;










// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class user extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   user.init({
//     username: DataTypes.STRING,
//     password: DataTypes.STRING,
//     membership_form_id: DataTypes.BIGINT,
//     type: DataTypes.ENUM
//   }, {
//     sequelize,
//     modelName: 'user',
//   });
//   return user;
// };