import * as dotenv from 'dotenv';
import express from 'express';
import userRouter from './routers/user.router';
import { errorHandler } from './middleware/errorHandler';

const PORT = 3001;
const app = express();

dotenv.config();
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello! 👀')
})

app.use('/api/user', userRouter);

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
