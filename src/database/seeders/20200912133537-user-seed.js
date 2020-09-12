import dotenv from 'dotenv';
import encryptor from '../../helpers/hashPassword';

dotenv.config();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await encryptor.hashingPassword(process.env.ADMIN_PASSWORD, 10)
    await queryInterface.bulkInsert('Users', [{
      first_name: 'Phocas',
      last_name: 'Niyongombwa',
      email: 'phocasniyongombwa@gmail.com',
      password,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', 
    {email: 'phocasniyongombwa@gmail.com' }, {})
  }
};
