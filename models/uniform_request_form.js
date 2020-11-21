'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class uniform_request_form extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  uniform_request_form.init({
    form_id: DataTypes.BIGINT,
    document_id: DataTypes.BIGINT,
    chapter_id: DataTypes.BIGINT,
    uniform_type: DataTypes.ENUM('A','C'),
    date_requested: DataTypes.DATE,
    volunteer: DataTypes.BIGINT,
    quantity: DataTypes.INTEGER,
    receipt_no: DataTypes.STRING,
    date: DataTypes.DATE,
    or_number: DataTypes.STRING,
    qty: DataTypes.BIGINT,
    claimed_on: DataTypes.DATE,
    released_by: DataTypes.BIGINT,
    council_pres_sig: DataTypes.BOOLEAN,
    council_adv_sig: DataTypes.BOOLEAN,
    chapter_bookkeeper_sig: DataTypes.BOOLEAN,
    treasurer_sig: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'uniform_request_form',
  });
  return uniform_request_form;
};