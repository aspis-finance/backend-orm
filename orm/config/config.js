module.exports = {
  development: {
    username: 'aspis_dev',
    password: 'secret_password',
    database: 'aspis_dev',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
  },
  staging: {
    use_env_variable: true,
    url: `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${
      process.env.POSTGRES_HOST
    }:${5432}/${process.env.POSTGRES_DB}`,
    dialect: 'postgres',
    logging: false,

  },
  production: {
    use_env_variable: true,
    url: `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${
      process.env.POSTGRES_HOST
    }:${5432}/${process.env.POSTGRES_DB}`,
    dialect: 'postgres',
    logging: false,
  },
}
