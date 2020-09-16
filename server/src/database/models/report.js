'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
   
    static associate(models) {
      // define associations here
      
      this.belongsTo(models.User, {foreignKey: 'userId'})
    }
  };
  Report.init({
    client_name: DataTypes.STRING,
    report_description: DataTypes.STRING,
    client_phone: DataTypes.STRING, 
    institution: DataTypes.STRING,
    tpc_staff: DataTypes.STRING,
    inspection_date: DataTypes.DATE,
    valuation_date: DataTypes.DATE,
    company: DataTypes.STRING,
    purpose: DataTypes.STRING,
    valuer: DataTypes.STRING,
    gross_fees: DataTypes.INTEGER,
    paid_advance: DataTypes.INTEGER,
    paid_balance: DataTypes.INTEGER,
    total_paid: DataTypes.INTEGER,
    inspection_transport: DataTypes.INTEGER,
    technician: DataTypes.STRING,
    irpv: DataTypes.INTEGER,
    covers: DataTypes.INTEGER,
    envelops: DataTypes.INTEGER,
    total_pages: DataTypes.INTEGER,
    printing: DataTypes.INTEGER,
    picked: DataTypes.BOOLEAN,
    comment: DataTypes.TEXT,
    debts: DataTypes.INTEGER,
    userId: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Report',
  });
  return Report;
};