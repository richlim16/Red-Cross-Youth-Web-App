'use strict';
const {DataTypes, DATE} = require('sequelize');
const connection = require('../dbconnection');

const trainingsAttended = connection.sequelize.define('trainings_attended', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  rcy_id: DataTypes.BIGINT,
  certificate_no: DataTypes.STRING,
  training_attended: DataTypes.STRING,
  place: DataTypes.STRING,
  start_date: DataTypes.DATE,
  end_date: DataTypes.DATE
});

exports.model = trainingsAttended;