'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class officer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  officer.init({
    membership_form_id: DataTypes.BIGINT,
    committee_id: DataTypes.BIGINT,
    position: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'officer',
  });
  return officer;
};