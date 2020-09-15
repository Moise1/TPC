'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Reports', [{
      client_name: 'John Doe',
      userId: 2,
      client_phone: '0788123456',
      report_description: 'This is a final report',
      institution: 'Some Bank',
      tpc_staff: 'Eric Foo',
      inspection_date: '02-10-2020',
      valuation_date: '10-12-2020',
      company: 'Some Company',
      purpose: 'Land surveying',
      valuer: 'Foo Jeans',
      gross_fees: 400000,
      paid_advance: 100000,
      paid_balance: 300000,
      total_paid: 400000,
      debts: 0,
      inspection_transport: 20000,
      technician: 'Jane Dean',
      irpv: 50000,
      covers: 30000,
      envelops: 3000,
      total_pages: 50,
      printing: 10000,
      picked: false,
      comment: 'It was done successfully.',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Reports', null, {})
  }
};
