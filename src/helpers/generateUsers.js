import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
// import { User } from '../models/User.js';

const namesFile = new URL('../data/names.json', import.meta.url);

const names = JSON.parse(fs.readFileSync(namesFile));

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getName() {
  const index = getRndInteger(0, names.length - 1);
  return names[index];
}

function getGender() {
  return getRndInteger(0, 1) === 1 ? 'male' : 'female';
}

function generateBoolean() {
  return getRndInteger(2, 10) > 2;
}

function getRndId(users, currentUserId) {
  const index = getRndInteger(0, users.length - 1);
  const { userId } = users[index];

  if (userId === currentUserId) {
    getRndId(users, currentUserId);
  }

  return userId;
}

function getIds(users, currentUserId) {
  const length = generateBoolean() ? getRndInteger(0, users.length) : 0;
  const ids = Array.from({ length }, () => getRndId(users, currentUserId));

  return ids;
}

function preGenerateUsers(from, to) {
  const length = getRndInteger(from, to);
  const users = Array.from({ length }, () => ({
    userId: uuidv4(),
    first_name: getName(),
    gender: getGender(),
  }));

  return users;
}

export function generateUsers(from = 100, to = 200) {
  const simpleUsers = preGenerateUsers(from, to);

  const preparedUsers = simpleUsers.map(user => ({
    ...user,
    following: getIds(simpleUsers, user.userId),
  }));

  return preparedUsers;
}
