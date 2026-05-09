const Categoria = require('../domain/Categoria');

class CategoriaService {
  constructor() {
    this.categorias = [];
    this.currentId = 1;
  }

  listarTodas() {
    return this.categorias;
  }

  criar(nome) {
    if (!nome || nome.trim() === '') {
      throw new Error('O nome da categoria é obrigatório.');
    }

    const novaCategoria = new Categoria(this.currentId++, nome);
    this.categorias.push(novaCategoria);
    return novaCategoria;
  }
}

module.exports = new CategoriaService();