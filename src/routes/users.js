import express from 'express';
import { UsersController } from '../controllers/users.js';
import { resetDB } from '../utils/resetDB.js';

export const router = express.Router();

router.get('/users', UsersController.getAllUsers);
router.get('/users/:id', UsersController.getOneUser);
router.get('/users/:id/friends', UsersController.getUserFriends);
router.get('/max-following', UsersController.getMaxFollowing);
router.get('/not-following', UsersController.getNotFollowing);

router.get('/reset', (req, res) => {
  const usersCount = req.query.usersCount || 200;

  resetDB(usersCount).then(() => res.send('Reset table with users count: ' + usersCount));
});
