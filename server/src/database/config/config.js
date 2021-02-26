import dotenv from 'dotenv';

dotenv.config();
const config= {
  development: {
    use_env_variable: 'DEV_DATABASE_URL',
    dialect: 'postgres',
    logging: false
  },
  test: {
    use_env_variable: 'TEST_DATABASE_URL',
    dialect: 'postgres',
    logging: false

  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: tthis ? { rejectUnauthorized: false } : false,
    },
  },
}

module.exports = config;