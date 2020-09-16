'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Reports',
        'report_description', {
          type: Sequelize.TEXT,
          allowNull: false
        }
      ),

      queryInterface.addColumn(
        'Reports',
        'client_phone', {
          type: Sequelize.STRING,
          allowNull: false
        }
      ),

      queryInterface.addColumn(
        'Reports',
        'institution', {
          type: Sequelize.STRING,
          allowNull: false
        }
      ),

      queryInterface.addColumn(
        'Reports',
        'tpc_staff', {
          type: Sequelize.STRING,
          allowNull: false
        }
      ),

      queryInterface.addColumn(
        'Reports',
        'inspection_date', {
          type: Sequelize.DATE,
          allowNull: false
        }
      ),

      queryInterface.addColumn(
        'Reports',
        'valuation_date', {
          type: Sequelize.DATE,
          allowNull: false
        }
      ),

      queryInterface.addColumn(
        'Reports',
        'company', {
          type: Sequelize.STRING,
          allowNull: false
        }
      ),

      queryInterface.addColumn(
        'Reports',
        'purpose', {
          type: Sequelize.STRING,
          allowNull: false
        }
      ),

      queryInterface.addColumn(
        'Reports',
        'valuer', {
          type: Sequelize.STRING,
          allowNull: false
        }
      ),

      queryInterface.addColumn(
        'Reports',
        'gross_fees', {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      ),

      queryInterface.addColumn(
        'Reports',
        'paid_advance', {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      ),

      queryInterface.addColumn(
        'Reports',
        'paid_balance', {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      ),

      queryInterface.addColumn(
        'Reports',
        'total_paid', {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      ),

      queryInterface.addColumn(
        'Reports',
        'debts', {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      ),

      queryInterface.addColumn(
        'Reports',
        'inspection_transport', {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      ),

      queryInterface.addColumn(
        'Reports',
        'technician', {
          type: Sequelize.STRING,
          allowNull: false
        }
      ),

      queryInterface.addColumn(
        'Reports',
        'irpv', {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      ),

      queryInterface.addColumn(
        'Reports',
        'covers', {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      ),

      queryInterface.addColumn(
        'Reports',
        'envelops', {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      ),

      queryInterface.addColumn(
        'Reports',
        'total_pages', {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      ),

      queryInterface.addColumn(
        'Reports',
        'printing', {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      ),

      queryInterface.addColumn(
        'Reports',
        'picked', {
          type: Sequelize.BOOLEAN,
          allowNull: false
        }
      ),

      queryInterface.addColumn(
        'Reports',
        'comment', {
          type: Sequelize.TEXT,
          allowNull: false
        }
      ),
    ])
  },

  down:  (queryInterface, Sequelize) => {
   return Promise.all([
     queryInterface.removeColumn('Reports', 'report_description'),
     queryInterface.removeColumn('Reports', 'client_phone'),
     queryInterface.removeColumn('Reports', 'institution'),
     queryInterface.removeColumn('Reports', 'tpc_staff'),
     queryInterface.removeColumn('Reports', 'inspection_date'),
     queryInterface.removeColumn('Reports', 'valuation_date'),
     queryInterface.removeColumn('Reports', 'company'),
     queryInterface.removeColumn('Reports', 'purpose'),
     queryInterface.removeColumn('Reports', 'valuer'),
     queryInterface.removeColumn('Reports', 'gross_fees'),
     queryInterface.removeColumn('Reports', 'paid_advance'),
     queryInterface.removeColumn('Reports', 'paid_balance'),
     queryInterface.removeColumn('Reports', 'total_paid'),
     queryInterface.removeColumn('Reports', 'debts'),
     queryInterface.removeColumn('Reports', 'inspection_transport'),
     queryInterface.removeColumn('Reports', 'technician'),
     queryInterface.removeColumn('Reports', 'irpv'),
     queryInterface.removeColumn('Reports', 'covers'),
     queryInterface.removeColumn('Reports', 'envelops'),
     queryInterface.removeColumn('Reports', 'total_pages'),
     queryInterface.removeColumn('Reports', 'printing'),
     queryInterface.removeColumn('Reports', 'picked'),
     queryInterface.removeColumn('Reports', 'comment'),
])
  }
};
