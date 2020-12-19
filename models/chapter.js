'use strict';
const {DataTypes, DATE} = require('sequelize');
const connection = require('../dbconnection');

const chapter = connection.sequelize.define('chapter', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  region: DataTypes.STRING,
  address: DataTypes.STRING,
  contact_info: DataTypes.STRING,
  name: DataTypes.STRING
});

exports.model = chapter;