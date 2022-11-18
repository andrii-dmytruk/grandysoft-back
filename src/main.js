import 'dotenv/config';
import express from 'express';
import { router } from './routes/users.js';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use('/', router);


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
