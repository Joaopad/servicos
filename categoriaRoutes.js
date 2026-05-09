const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/CategoriaController');

router.get('/categorias', (req, res) => categoriaController.listar(req, res));
router.post('/categorias', (req, res) => categoriaController.criar(req, res));

module.exports = router;