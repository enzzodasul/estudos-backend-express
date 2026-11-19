import express from 'express';
const app = express()

import {router as routerTarefas} from './routes/tarefas.js'

app.use(express.json())

app.use('/tarefas', routerTarefas )


app.listen(3000, () => {
    console.log('Server running on port 3000');
    console.log('Open browser: http://localhost:3000');
});
