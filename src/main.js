import 'dotenv/config';
import express from 'express';
import { User } from './models/User.js';

const PORT = process.env.PORT || 5000;

const app = express();

async function testingBD(first_name, gender) {
  const user = await User.create({ first_name, gender });


  console.log(user);

  return user;
}

app.use(express.json());

app.get('/test', (req, res) => {
  res.json(testingBD('Name', 'm'));
});

app.get('/users', (req, res) => {
  User.findAll().then(users => res.json(users));
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
