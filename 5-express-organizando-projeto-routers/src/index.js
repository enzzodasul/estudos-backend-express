import express from 'express';

import {router as usersRouter} from './routes/users.js';
import {router as productsRouter} from './routes/users.js';

const app = express();

app.use(express.json());

app.use('/users',usersRouter);
app.use('/products',productsRouter);


app.listen(3000, () => {
  console.log('server online port 3000 \n open browser: http://localhost:3000')
});
