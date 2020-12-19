'use strict';
const {DataTypes, DATE} = require('sequelize');
const connection = require('../dbconnection');

const committee = connection.sequelize.define('committee', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  council_id: DataTypes.BIGINT,
  type: DataTypes.ENUM('DRRM', 'Pledge 25', 'Trainings', 'Council Dev', 'YAPE', 'YPE', 'Health Services', 'Welfare', 'Awards and Recognition', 'Safety'),
  no_of_members: DataTypes.INTEGER
});

exports.model = committee;