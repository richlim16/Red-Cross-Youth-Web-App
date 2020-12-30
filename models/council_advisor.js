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