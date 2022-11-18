import { sequelize } from './utils/db.js';
import './models/User.js';
import 'dotenv/config';

sequelize.sync({ force: true }).catch(err => console.log(err));
