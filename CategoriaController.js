const categoriaService = require('../services/CategoriaService');

class CategoriaController {
  listar(req, res) {
    const categorias = categoriaService.listarTodas();
    return res.json(categorias);
  }

  criar(req, res) {
    try {
      const { nome } = req.body;
      const novaCategoria = categoriaService.criar(nome);
      return res.status(201).json(novaCategoria);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new CategoriaController();