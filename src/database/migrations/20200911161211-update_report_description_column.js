'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
   return  queryInterface.changeColumn('Reports', 'report_description', {
    type: Sequelize.TEXT,
    allowNull: false,
  })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Reports', 'report_description', {
      type: Sequelize.TEXT,
      allowNull: false
    })
  }
};
