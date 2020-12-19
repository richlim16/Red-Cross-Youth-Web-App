'use strict';
const {DataTypes, DATE} = require('sequelize');
const connection = require('../dbconnection');

const officer = connection.sequelize.define('officer', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  membership_form_id: DataTypes.BIGINT,
  position: DataTypes.ENUM('President', 'Vice President', 'Secretary', 'Assistant Secretary', 'Treasurer', 'Auditor', 'PRO Internal', 'PRO External', 'DRRM', 'Pledge 25', 'Trainings', 'Council Dev', 'YAPE', 'YPE', 'Health Services', 'Welfare', 'Awards and Recognition', 'Safety'),
  head_of: DataTypes.BIGINT
});

exports.model = officer;