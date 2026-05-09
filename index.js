const express = require('express');
const categoriaRoutes = require('./routes/categoriaRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

// Rotas
app.use(categoriaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});