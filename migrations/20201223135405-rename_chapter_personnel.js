'use strict';

module.exports={
  up: async(queryInterface, Sequelize)=>{
    await queryInterface.renameTable("chapter_personnels","chapter_personnel");
  },

  down: async(queryInterface, Sequelize)=>{
    await queryInterface.renameTable("chapter_personnels","chapter_personnel");
  }
};