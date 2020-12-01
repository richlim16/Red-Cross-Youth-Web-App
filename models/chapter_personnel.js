'use strict';
const {DataTypes, DATE} = require('sequelize');
const connection = require('../dbconnection');


const chapterPersonnel = connection.sequelize.define('chapter_personnel', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  chapter_id: DataTypes.BIGINT,
  position: DataTypes.ENUM('Chapter Admin', 'Chapter Youth Advisor')
});


exports.model = chapterPersonnel;











// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class chapter_personnel extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   chapter_personnel.init({
//     chapter_id: DataTypes.BIGINT,
//     position: DataTypes.ENUM
//   }, {
//     sequelize,
//     modelName: 'chapter_personnel',
//   });
//   return chapter_personnel;
// };
