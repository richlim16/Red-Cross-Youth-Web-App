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
  user_id: DataTypes.BIGINT,
  chapter_id: DataTypes.BIGINT,
  position: DataTypes.ENUM('Chapter Admin', 'Chapter Youth Advisor'),
  
},{
	freezeTableName: true
});

exports.model = chapterPersonnel;