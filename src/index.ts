import express from 'express';
import { connectetion } from './config/db';
import { userModel } from './models/user.model';

const app = express();
app.use(express.json());

console.log(connectetion, userModel);

const PORT = 3000;

app.get('/', (_req, res) => {
  res.send('Hello! 👀')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
