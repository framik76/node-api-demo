import express, { Application } from 'express';
import swaggerUI from 'swagger-ui-express';
import fs from 'fs';
import config from './config';
import userRoutes from './routes/user.routes';
import cors from 'cors';
import db from './db/connection';


class Server {
    private app: Application;

    /* Swagger files start */
    private swaggerFile: any = (process.cwd()+"/swagger/swagger.json");
    private swaggerData: any = fs.readFileSync(this.swaggerFile, 'utf8');
    private customCss: any = fs.readFileSync((process.cwd()+"/swagger/swagger.css"), 'utf8');
    private swaggerDocument = JSON.parse(this.swaggerData);
    /* Swagger files end */

    constructor() {
        this.app = express();
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database connected');
        } catch (error: any) {
            console.error(error, 'Error connecting to DB');
        }
    }

    routes() {
        this.app.use( config.apiPaths.users, userRoutes );
        this.app.get('/', (req, res) => {
            res.send('Hello World!');
        });
    }

    middlewares() {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use(express.static('public') );
        this.app.use('/api/docs', swaggerUI.serve,
            swaggerUI.setup(this.swaggerDocument, undefined, undefined, this.customCss));
    }

    listen() {
        this.app.listen( config.port, () => {
            console.log(`Server up and running at port: ${config.port}`);
        })
    }

}

export default Server;