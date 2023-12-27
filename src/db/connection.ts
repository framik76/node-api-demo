import { Sequelize } from 'sequelize';
import config from './../config'

const db = new Sequelize(config.dbConfig.dbUrl);

export default db;