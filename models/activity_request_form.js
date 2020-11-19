'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class activity_request_form extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  activity_request_form.init({
    council_id: DataTypes.BIGINT,
    cyc_id: DataTypes.BIGINT,
    member_id: DataTypes.BIGINT,
    activity_name: DataTypes.STRING,
    date_filed: DataTypes.DATE,
    objectives: DataTypes.TEXT,
    date_time: DataTypes.DATE,
    venue: DataTypes.STRING,
    participating_components: DataTypes.TEXT,
    rcys_invlved: DataTypes.INTEGER,
    committee_chairpersons: DataTypes.STRING,
    committee_involved: DataTypes.STRING,
    submitted_by_pres: DataTypes.BIGINT,
    submitted_by_adv: DataTypes.BIGINT,
    noted_by_chair: DataTypes.BIGINT,
    noted_by_pres: DataTypes.BIGINT,
    received_by: DataTypes.BIGINT,
    date_received: DataTypes.DATE,
    council_pres_sig: DataTypes.BOOLEAN,
    council_adv_sig: DataTypes.BOOLEAN,
    cyc_chairperson_sig: DataTypes.BOOLEAN,
    cyc_president_sig: DataTypes.BOOLEAN,
    received_by_sig: DataTypes.BOOLEAN,
    chapter_service_rep_sig: DataTypes.BOOLEAN,
    chapter_admin_sig: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'activity_request_form',
  });
  return activity_request_form;
};