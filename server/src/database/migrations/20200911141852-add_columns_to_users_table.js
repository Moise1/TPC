'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Users',
        'last_name', {
          type: Sequelize.STRING,
          allowNull: false
        }
      ),
      queryInterface.addColumn(
        'Users',
        'email', {
          type: Sequelize.STRING,
          allowNull: false
        }
      ),

      queryInterface.addColumn(
        'Users',
        'password', {
          type: Sequelize.STRING,
          allowNull: false
        }
      ),
      
    ])
  },

  down:  (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Users', 'last_name'),
      queryInterface.removeColumn('Users', 'email'),
      queryInterface.removeColumn('Users', 'password')
    ])
  }
};
