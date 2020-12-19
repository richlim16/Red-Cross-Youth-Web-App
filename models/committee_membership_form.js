'use strict';
const {DataTypes, DATE} = require('sequelize');
const connection = require('../dbconnection');

const committeeMembershipForm = connection.sequelize.define('committee_membership_form', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  document_id: DataTypes.BIGINT,
  committee_id: DataTypes.BIGINT,
  prepared_by: DataTypes.BIGINT,
  noted_by: DataTypes.BIGINT,
  submitted_by: DataTypes.BIGINT,
  date_filed: DataTypes.DATE,
  school_council_sec_sig: DataTypes.BOOLEAN,
  school_council_adv_sig: DataTypes.BOOLEAN,
  school_council_pres_sig: DataTypes.BOOLEAN,
  chapter_service_rep_sig: DataTypes.BOOLEAN,
  chapter_admin_sig: DataTypes.BOOLEAN
});

exports.model = committeeMembershipForm;