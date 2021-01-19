'use strict';

module.exports={
  up:async(queryInterface,Sequelize)=>{
    queryInterface.changeColumn('councils','user_id',{
      type:Sequelize.BIGINT,
      allowNull: false,
      references:{
        model:'users',
        key:'id'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
     //do nothing
  }
};