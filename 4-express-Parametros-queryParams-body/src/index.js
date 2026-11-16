import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: `usuario com o id: ${id} encontrado com sucesso `,
  });
});
app.get('/users/search', (req, res) => {
  const { name, age } = req.query

  res.json({
    message: `Nome: ${name}, Idade: ${age}`
  })
})


app.post('/users',(req,res) => {
const{name}=req.body;

res.status(201).json({
  message: name
});
});


app.listen(3000, () => {
  console.log('servidor rodando na porta 3000');
});
