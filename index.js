import express from 'express';
import usuariosRouter from './src/routes/usuario.routes.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ ok: true, message: 'Servidor funcionando' });
});

// Monta as rotas de usuários em /usuarios
app.use('/usuarios', usuariosRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
