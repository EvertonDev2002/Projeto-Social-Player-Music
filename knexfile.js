module.exports = {
    development: {
      client: "pg",
      connection: {
        database: "player-music-quiz",
        user: "postgres",
        password: "123",
      },
    },
  
    production: {
      client: "pg",
      connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
      },
      pool: {
        min: 2,
        max: 10,
      }
    },
  };