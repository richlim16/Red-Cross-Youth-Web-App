'use strict';

module.exports={
  up: async (queryInterface,Sequelize)=>{
    return [
    queryInterface.addColumn('council_advisors','first_name',{
      type:Sequelize.STRING,
      allowNull:false,
      after:'council_id'
    }),
    queryInterface.addColumn('council_advisors','middle_name',{
      type:Sequelize.STRING,
      allowNull:false,
      after:'first_name'
    }),
    queryInterface.addColumn('council_advisors','last_name',{
      type:Sequelize.STRING,
      allowNull:false,
      after:'middle_name'
    })
    ];
  },

  down: async(queryInterface,Sequelize)=>{
    return [
      queryInterface.removeColumn('council_advisors','first_name'),
      queryInterface.removeColumn('council_advisors','middle_name'),
      queryInterface.removeColumn('council_advisors','last_name'),
    ]
  }
};