'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chapter_personnel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  chapter_personnel.init({
    chapter_id: DataTypes.BIGINT,
    position: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'chapter_personnel',
  });
  return chapter_personnel;
};