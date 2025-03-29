import { autor } from "../models/Autor.js";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listaAutor = await autor.find({});
      res.status(200).json(listaAutor);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message}- Falha na requisição!` });
    }
  }
  static async listaAutorById(req, res) {
    try {
      const id = req.params.id;
      const listaById = await autor.findById(id);
      res.status(200).json(listaById);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message}- Falha na requisição!` });
    }
  }
  static async cadastrarAutor(req, res) {
    try {
      const criarAutor = await autor.create(req.body);
      res.status(200).json("Autor criado com sucesso!");
    } catch (error) {
      res.status(500).json("Falha ao criar usuário!");
    }
  }
  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json("Autor atualizado com sucesso!");
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message}- Falha na requisição!` });
    }
  }
  static async deletarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);

      res.status(200).json("Autor deletado com sucesso!");
    } catch (error) {
      res.status(500).json({ message: `${error.message}- Falha ao deletar!` });
    }
  }
}
export default AutorController;
