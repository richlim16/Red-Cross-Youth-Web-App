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