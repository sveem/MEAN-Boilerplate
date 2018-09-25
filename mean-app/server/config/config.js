module.exports = {
  firebase: {
      username: process.env.SQL_USERNAME,
      password: process.env.SQL_PASSWORD,
      database: process.env.SQL_DATABASE,
      server: process.env.SQL_SERVER,
      dialect: 'mssql',
      use_env_variable: 'DATABASE_URL'
  },
  mongo: {
      username: process.env.MONGO_USER,
      password: process.env.MONGO_PASSWORD,
      database: process.env.MONGO_DATABASE,
      server: process.env.MONGO_SERVER,
      connection: process.env.MONGODB_URI
  },
  httpPort: process.env.PORT || 9001
};