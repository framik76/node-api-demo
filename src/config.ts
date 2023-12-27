import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: process.env.PORT || "8000",
    apiPaths: {
        users: '/api/users'
    },
    dbConfig: {
        dbUrl: process.env.DATABASE_URL || '<DATABASE_URL>',
        db: process.env.DB || 'demo',
        dbUser: process.env.DB_USER || 'francesco.manenti',
        dbPassword: process.env.DB_PASSWORD || '',
        dbHost: process.env.DB_HOST || 'localhost',
        dbPort: Number(process.env.DB_PORT) || 5432
    }
}

export default config;