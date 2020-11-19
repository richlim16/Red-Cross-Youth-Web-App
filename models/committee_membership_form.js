'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class committee_membership_form extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  committee_membership_form.init({
    chapter_id: DataTypes.BIGINT,
    council_id: DataTypes.BIGINT,
    volunteer_id: DataTypes.BIGINT,
    committee_id: DataTypes.INTEGER,
    prepared_by: DataTypes.BIGINT,
    noted_by: DataTypes.BIGINT,
    submitted_by: DataTypes.BIGINT,
    date_filed: DataTypes.DATE,
    school_council_sec_sig: DataTypes.BOOLEAN,
    school_council_adv_sig: DataTypes.BOOLEAN,
    school_council_pres_sig: DataTypes.BOOLEAN,
    chapter_service_rep_sig: DataTypes.BOOLEAN,
    chapter_admin_sig: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'committee_membership_form',
  });
  return committee_membership_form;
};