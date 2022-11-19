import { requestsDB } from '../utils/requestsDB.js';

async function getAll() {
  return requestsDB.getAll();
}

async function getOne(id) {
  return await requestsDB.getOne(id);
}

async function getTopFollowing(count = 5) {
  return requestsDB.getTopFollowing(count);
}

async function getZeroFollowing() {
  return requestsDB.getZeroFollowing();
}

async function getFriends(id, order_by, order_type) {
  if (order_by !== 'id' || order_by !== 'first_name') {
    order_by = 'id';
  }

  if (order_type !== 'asc' || order_type !== 'desc') {
    order_type = 'asc';
  }

  return requestsDB.getFriends(id, order_by, order_type);
}

export const UsersService = {
  getAll,
  getOne,
  getTopFollowing,
  getZeroFollowing,
  getFriends,
};
