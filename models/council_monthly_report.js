'use strict';
const {DataTypes, DATE} = require('sequelize');
const connection = require('../dbconnection');

const councilMonthlyReport = connection.sequelize.define('council_monthly_report', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  council_id: DataTypes.BIGINT,
  document_id: DataTypes.BIGINT,
  for_the_month_of: DataTypes.INTEGER,
  year: DataTypes.INTEGER,
  name_of_activity: DataTypes.STRING,
  nature_of_activity: DataTypes.STRING,
  accomplishments: DataTypes.STRING,
  objective: DataTypes.STRING,
  no_of_rcy_participants: DataTypes.BIGINT,
  remarks: DataTypes.STRING,
  prepared_by: DataTypes.BIGINT,
  submitted_by: DataTypes.BIGINT,
  noted_by: DataTypes.BIGINT,
  approved_by: DataTypes.BIGINT,
  school_council_sec_sig: DataTypes.BOOLEAN,
  school_council_pres_sig: DataTypes.BOOLEAN,
  chapter_service_rep_sig: DataTypes.BOOLEAN,
  chapter_admin_sig: DataTypes.BOOLEAN
});

exports.model = councilMonthlyReport;