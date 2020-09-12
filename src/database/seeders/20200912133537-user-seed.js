import dotenv from 'dotenv';
import passwordManager from '../../helpers/passwordManager';

dotenv.config();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await passwordManager.hashingPassword(process.env.ADMIN_PASSWORD, 10)
    await queryInterface.bulkInsert('Users', [
      {
        first_name: 'Phocas',
        last_name: 'Niyongombwa',
        email: 'phocasniyongombwa@gmail.com',
        password,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Eric',
        last_name: 'Mez',
        email: 'eric@gmail.com',
        password,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users',
      { email: 'phocasniyongombwa@gmail.com' })
  }
};
