import { User } from '../models/User.js';
import { sequelize } from '../utils/db.js';

async function getAll() {
  return await User.findAll();
}

async function getOne(id) {
  return await User.findByPk(id);
}

async function getTopFollowing(count = 5) {

  const users = await sequelize.query(
    `SELECT *
     FROM "user"
     ORDER BY cardinality("following") DESC
     LIMIT :limit`,
    {
      replacements: { limit: count },
    }
  );

  return users[0];
}

async function getZeroFollowing() {

  const users = await sequelize.query(
    `SELECT *
     FROM "user"
     WHERE cardinality("following") = 0`
  );

  return users[0];
}

async function getFriends(id, order_by, order_type) {
  const selectedUser = await getOne(id);

  if (order_by !== 'id' || order_by !== 'first_name') {
    order_by = 'id';
  }

  if (order_type !== 'asc' || order_type !== 'desc') {
    order_type = 'asc';
  }

  const friends = await sequelize.query(
    `SELECT *
     FROM "user" as "user"
     INNER JOIN "user" as "friend"
     ON "user"."userId" = :userId and "user"."userId" = ANY ("friend"."following") and "friend"."userId" = ANY ("user"."following")
     ORDER BY "friend"."${order_by}" ${order_type.toUpperCase()}`,
    {
      replacements: {
        userId: selectedUser.userId,
      },
    }
  );

  return friends[0];
}

export const UsersService = {
  getAll,
  getOne,
  getTopFollowing,
  getZeroFollowing,
  getFriends,
};
