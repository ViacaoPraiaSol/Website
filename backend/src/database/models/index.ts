import { Sequelize } from "sequelize";
import * as config from '../config/databaseConfig';

export default new Sequelize(config);