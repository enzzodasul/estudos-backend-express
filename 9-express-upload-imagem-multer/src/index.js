
import express from 'express';
import multer from 'multer';

const app = express();

app.use(express.json());

// CONFIGURAÇÃO DO MULTER
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },

  filename: (req, file, cb) => {
    const nomeUnico = Date.now() + '-' + file.originalname;
    cb(null, nomeUnico);
  }
});

// FILTRO PARA ACEITAR APENAS IMAGENS
const fileFilter = (req, file, cb) => {
  const tiposPermitidos = ['image/jpeg', 'image/png'];

  if (tiposPermitidos.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Archive format not supported'));
  }
};

// CONFIGURAÇÃO DO UPLOAD
const upload = multer({
  storage,
  fileFilter
});

// ROTA DE UPLOAD
app.post('/upload', upload.single('imagem'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      erro: 'Nenhuma imagem foi enviada'
    });
  }

  res.status(201).json({
    message: 'Image uploaded successfully!',
    arquivo: req.file
  });
});

// TRATAMENTO DE ERROS
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({
      erro: 'UPLOAD ERROR',
      detalhe: err.message
    });
  }

  if (err) {
    return res.status(400).json({
      erro: err.message
    });
  }

  next();
});

// CONFIGURAÇÃO DA PORTA
app.listen(3000, () => {
  console.log('Server running on port 3000');
  console.log('Open your browser at http://localhost:3000');
});
