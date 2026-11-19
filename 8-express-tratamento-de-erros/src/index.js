
import express from 'express';

const app = express();

app.use(express.json());

// ROTA QUE PROVOCA UM ERRO
app.get('/erro', (req, res,next) => {
  try{ throw new Error('SOMETHING EXPECTED WENT WRONG');

  }catch (err) {
    next(err)
  }

});

//ROUTE NOT FOUND
app.use((req,res) => {
  res.status(404).json({
    erro: '!!ROUTE NOT FOUND!!'
  })
})



// MIDDLEWARE DE TRATAMENTO DE ERROS
app.use((err, req, res, next) => {
    console.log('Erro interno:', err.message);

    res.status(500).json({
        erro: 'INTERNAL SERVER ERROR',
        detalhe: err.message,
    });
});

// INICIANDO O SERVIDOR
app.listen(3000, () => {
    console.log('SERVER RUNNING ON PORT 3000');
    console.log('OPEN BROWSER: http://localhost:3000/erro');
});
