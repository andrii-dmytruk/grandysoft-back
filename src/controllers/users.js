import { getAll } from '../services/users.js';

function getAllUsers(req, res) {
  getAll()
    .then(users => {
      res.statusCode = 200;
      res.send(users);
    })
    .catch(err => {
      console.log('Loading all users failed: ' + err.message);
      res.sendStatus(400);
    });
}


export const UsersController = {
  getAllUsers,
};
