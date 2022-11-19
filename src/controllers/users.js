import { UsersService } from '../services/users.js';

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
  const usersCount = req.query.usersCount || 5;

  UsersService.getTopFollowing(usersCount)
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      console.log('Loading max users following failed: ' + err.message);
      res.sendStatus(400);
    });
}

function getNotFollowing(req, res) {
  UsersService.getZeroFollowing()
    .then(users => {
      res.send(users);
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

  const { order_by = 'id', order_type = 'asc' } = req.query;

  UsersService.getFriends(id, order_by, order_type)
    .then(friends => {
      if (friends) {
        res.send(friends);
        return;
      }

      res.sendStatus(404);
    })
    .catch(err => {
      console.log('Loading friends failed: ' + err.message);
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
