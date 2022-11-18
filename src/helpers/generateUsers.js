import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

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

function getRndId(users) {
  const index = getRndInteger(0, users.length - 1);
  const { userId } = users[index];

  return userId;
}

function getIds(users, currentUserId) {
  const length = generateBoolean() ? getRndInteger(1, 150) : 0;
  const ids = [];

  while(ids.length < length){
    const id = getRndId(users);

    if(ids.indexOf(id) === -1 && id !== currentUserId) {
      ids.push(id);
    }
  }

  return ids;
}

function preGenerateUsers(length) {
  const users = Array.from({ length }, () => ({
    userId: uuidv4(),
    first_name: getName(),
    gender: getGender(),
  }));

  return users;
}

export function generateUsers(length = 200) {
  const simpleUsers = preGenerateUsers(length);

  const preparedUsers = simpleUsers.map(user => ({
    ...user,
    following: getIds(simpleUsers, user.userId),
  }));

  return preparedUsers;
}
