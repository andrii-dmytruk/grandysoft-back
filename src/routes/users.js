import express from 'express';
import { UsersController } from '../controllers/users.js';
import { resetDB } from '../utils/resetDB.js';

export const router = express.Router();

router.get('/users', UsersController.getAllUsers);


router.get('/test', (req, res) => {
  res.json();
});

router.get('/reset', (req, res) => {
  resetDB().then(() => res.send('Reset successfully!'));
});
