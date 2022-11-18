import { sequelize } from './db.js';
import { User } from '../models/User.js';
import '../models/User.js';
import 'dotenv/config';
import { generateUsers } from '../helpers/generateUsers.js';


export const resetDB = async () => {
  try {
    await sequelize.sync({ force: true });
    await Promise.all(generateUsers().map(user => User.create(user)));
  } catch(error) {
    console.log('Setup error: ' + error.message);
  }
};
