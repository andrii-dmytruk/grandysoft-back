import { User } from '../models/User.js';

async function getAll() {
  return await User.findAll();
}

async function getOne(id) {
  return await User.findOne({
    where: {id},
  });
}

async function getFriends(id) {
  try {
    const selectedUser = await getOne(id);
    const users = await getAll();

    const friends = [];

    for (const userId of selectedUser.following) {
      const user = users.find(userItem => userItem.userId === userId);
      if (user) {
        if (user.following.includes(selectedUser.userId)) {
          friends.push(user);
        }
      }
    }

    return friends;
  } catch (err) {
    console.log('Loading friends error: ' + err.message);
  }
}

export const UsersService = {
  getAll,
  getOne,
  getFriends,
};
