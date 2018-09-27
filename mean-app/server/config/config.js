module.exports = {
    firebase: {
        projectId: process.env.PROJECT_ID,
        clientEmail: process.env.CLIENT_EMAIL,
        privateKey: process.env.PRIVATE_KEY,
        databaseURL: process.env.DATABASE_URL
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
