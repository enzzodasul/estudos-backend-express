import express from 'express';

const app = express();

app.use(express.json());
const validarNome = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      ERRO: 'o nome é obrigatório',
    });
  }

  next();
};

app.get('/admin',autenticar,(req,res)=> {
  res.send('painel de controle')
})

function autenticar(req,res,next){
  const token = req.headers['authorization'];

  if(token !== '123456'){
    return res.status(401).send('não autorizado')
  }
  next()
  console.log("esta autorizado!")
  }



app.post('/users', validarNome, (req, res) => {
  const { name } = req.body

  res.status(201).json({
    message:`usuario ${name} criado com sucesso`
  });
});

// Porta do servidor rodando aplicação:
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
