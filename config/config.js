require('dotenv').config();

module.exports ={
    "development": {
      "username": "postgres",
      "password": process.env.DB_PASSWORD,
      "database": "memoApp",
      "host": "127.0.0.1",
      "dialect": "postgres",
      "port":5432,
      "operatorsAliases": false
    },
    "test": {
      "username": "postgres",
      "password": process.env.DB_PASSWORD,
      "database": "memoApp",
      "host": "127.0.0.1",
      "dialect": "postgres",
      "port":5432,
      "operatorsAliases": false
    },
    "production": {
      "username": "qrqalgdakvhqpx",
      "password": "1430fb08cfd602c8718cb5776817acfce06454adb1529602605d4ee5ada2a873",
      "database": "dj5fkda4v5k5o",
      "host": "ec2-44-198-223-154.compute-1.amazonaws.com",
      "dialect": "postgres",
      "port":5432,
      "operatorsAliases": false,
      "use_env_variable": "DATABASE_URL"
    }
  }
