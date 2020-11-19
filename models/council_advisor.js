'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class council_advisor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  council_advisor.init({
    user_id: DataTypes.BIGINT,
    council_id: DataTypes.BIGINT,
    volunteer_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'council_advisor',
  });
  return council_advisor;
};