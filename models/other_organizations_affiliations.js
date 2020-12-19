'use strict';
const {DataTypes, DATE} = require('sequelize');
const connection = require('../dbconnection');

const otherOrganizationsAffiliations = connection.sequelize.define('other_organizations_affiliations', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  rcy_id: DataTypes.BIGINT,
  organization: DataTypes.STRING,
  position: DataTypes.STRING,
  council: DataTypes.STRING,
  start_date: DataTypes.DATE,
  end_date: DataTypes.DATE
});

exports.model = otherOrganizationsAffiliations;