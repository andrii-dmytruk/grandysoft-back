import { getTopFollowing } from '../helpers/getTopFollowing.js';
import { getZeroFollowing } from '../helpers/getZeroFollowing.js';
import { UsersService } from '../services/users.js';
import { sortUsers } from '../helpers/sortUsers.js';

function getAllUsers(req, res) {
  UsersService.getAll()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      console.log('Loading all users failed: ' + err.message);
      res.sendStatus(400);
    });
}

function getMaxFollowing(req, res) {
  const count = req.query.count || 5;

  UsersService.getAll()
    .then(users => {
      const usersFromDB = users;
      res.send(getTopFollowing(usersFromDB, count));
    })
    .catch(err => {
      console.log('Loading max users following failed: ' + err.message);
      res.sendStatus(400);
    });
}

function getNotFollowing(req, res) {
  UsersService.getAll()
    .then(users => {
      const usersFromDB = users;
      res.send(getZeroFollowing(usersFromDB));
    })
    .catch(err => {
      console.log('Loading users not following failed: ' + err.message);
      res.sendStatus(400);
    });
}

function getOneUser(req, res) {
  const id = req.params.id;

  UsersService.getOne(id)
    .then(user => {
      if (user) {
        res.send(user);
        return;
      }

      res.sendStatus(404);
    })
    .catch(err => {
      console.log('Loading one user failed: ' + err.message);
      res.sendStatus(400);
    });
}

function getUserFriends(req, res) {
  const id = req.params.id;

  const { order_by, order_type = 'desc' } = req.query;

  UsersService.getFriends(id)
    .then(friends => {
      if (friends) {
        if (order_by) {
          friends = sortUsers(friends, order_by, order_type);
        }
        res.send(friends);
        return;
      }

      res.sendStatus(404);
    })
    .catch(err => {
      console.log('Loading one user failed: ' + err.message);
      res.sendStatus(400);
    });
}

export const UsersController = {
  getAllUsers,
  getMaxFollowing,
  getNotFollowing,
  getOneUser,
  getUserFriends,
};
