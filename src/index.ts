import express from 'express';
import userRouter from './routers/user.router';

const PORT = 3000;
const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello! 👀')
})

app.use('/api/user', userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
