'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class document extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  document.init({
    type: DataTypes.ENUM,
    form_id: DataTypes.BIGINT,
    chapter_id: DataTypes.BIGINT,
    council_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'document',
  });
  return document;
};