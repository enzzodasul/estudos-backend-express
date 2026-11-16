import express from 'express';

const app = express();

app.use(express.json());

let users = [
  { id: 1, name: 'Maria' },
  { id: 2, name: 'João' },
];

//GET
app.get('/users', (req, res) => {
  res.json(users);
});

//POST
app.post('/users', (req, res) => {
  const { name } = req.body;

  const newUser = {
    id: users.length + 1,
    name,
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

//PUT
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ message: 'usuario não encontrado' });
  }

  user.name = name;

  res.json(user);
});

//DELETE
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id != parseInt(id));

  res.json({
    message: 'usuario deletado com sucesso!',

  });
});

// Porta do servidor rodando aplicação:
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
