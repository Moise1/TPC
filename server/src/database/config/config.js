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
    use_env_variable: 'HEROKU_POSTGRESQL_BLUE_URL',
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
    dialectOptions: { ssl: {
      require: true,
      rejectUnauthorized: false
    } },

  },
}

module.exports = config;