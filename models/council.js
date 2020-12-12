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
  user_id: DataTypes.BIGINT,
  chapter_id: DataTypes.BIGINT,
  category: DataTypes.ENUM('Junior Red Cross Youth', 'Senior Red Cross Youth', 'Senior Plus Red Cross Youth', 'College Red Cross Youth', 'Community Red Cross Youth'),
  name: DataTypes.STRING
});


exports.model = council;