'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class council_monthly_report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  council_monthly_report.init({
    council_id: DataTypes.BIGINT,
    document_id: DataTypes.BIGINT,
    for_the_month_of: DataTypes.DATE,
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
  }, {
    sequelize,
    modelName: 'council_monthly_report',
  });
  return council_monthly_report;
};