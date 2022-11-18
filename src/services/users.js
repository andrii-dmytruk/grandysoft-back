import { User } from '../models/User.js';

export async function getAll() {
  return await User.findAll();
}
