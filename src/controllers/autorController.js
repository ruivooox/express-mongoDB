import mongoose from "mongoose";
import { autor } from "../models/Autor.js";

class AutorController {
  static listarAutores = async (req, res) => {
    try {
      const listaAutor = await autor.find({});
      res.status(200).json(listaAutor);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message}- Falha na requisição!` });
    }
  };
  static listaAutorById = async (req, res) => {
    try {
      const id = req.params.id;
      const listaById = await autor.findById(id);

      if (!listaById) {
        res.status(404).send({ message: "Id do autor não encontrado" });
        return;
      }
      res.status(200).json(listaById);
    } catch (error) {
      if (error instanceof mongoose.Error.CastError) {
        res
          .status(400)
          .send({ message: "Os Dados fornecidos estão incorretos" });
      }
      res.status(500).json({ message: "Falha na requisição!" });
    }
  };
  static cadastrarAutor = async (req, res) => {
    try {
      await autor.create(req.body);
      res.status(200).json("Autor criado com sucesso!");
    } catch (error) {
      res.status(500).json("Falha ao criar usuário!");
    }
  };
  static atualizarAutor = async (req, res) => {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json("Autor atualizado com sucesso!");
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message}- Falha na requisição!` });
    }
  };
  static deletarAutor = async (req, res) => {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);

      res.status(200).json("Autor deletado com sucesso!");
    } catch (error) {
      res.status(500).json({ message: `${error.message}- Falha ao deletar!` });
    }
  };
}
export default AutorController;
