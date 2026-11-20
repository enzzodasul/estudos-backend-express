import express from 'express';
import { router as createUser } from '../http/routes/controllers/create-users.js';
import { router as getUsers } from '../http/routes/controllers/get-users.js';
import { router as updateUsers } from '../http/routes/controllers/update-users.js';
import { router as deleteUsers } from '../http/routes/controllers/delete-users.js';

const app = express();
const port = 3000;
app.use(express.json());

app.use('/users', createUser);
app.use('/users', getUsers);
app.use('/users', updateUsers);
app.use('/users', deleteUsers);

//---------------------PORT SERVER--------------------------
app.listen(port, () => {
    console.log('SERVER RUNNING ON PORT ' + port);
});
