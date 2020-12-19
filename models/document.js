'use strict';
const {DataTypes, DATE} = require('sequelize');
const connection = require('../dbconnection');

const document = connection.sequelize.define('document', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  type: DataTypes.ENUM('MEMBERSHIP', 'COMMITTEE_MEMBERSHIP', 'ACTIVITY_REQUEST', 'ACTIVITY_REPORT', 'UNIFORM_REQUEST', 'SERVICE_REQUEST', 'COUNCIL_MONTHLY_REPORT'),
  chapter_id: DataTypes.BIGINT,
  council_id: DataTypes.BIGINT
});

exports.model = document;