import mongoose from "mongoose";
import livro from "../models/Livro.js";

class LivroController {
    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (error) {
            next(error);
        }
    }

    static async listarLivroPorID(req, res, next) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);

            if (!livroEncontrado) {
                res.status(404).send({
                    message: "Id do livro não encontrado!",
                });
                return;
            }

            res.status(200).json(livroEncontrado);
        } catch (error) {
            next(error);
        }
    }
    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({
                message: "criado com sucesso",
                livro: novoLivro,
            });
        } catch (error) {
            next(error);
        }
    }
    static async atualizarLivro(req, res, next) {
        try {
            const id = req.params.id;
            const atualizaLivro = await livro.findByIdAndUpdate(id, req.body);

            if (!atualizaLivro) {
                res.status(404).send({
                    message: "Id do livro não encontrado!",
                });
                return;
            }

            res.status(200).json({ message: "livro atualizado" });
        } catch (error) {
            next(error);
        }
    }
    static async deletarLivro(req, res, next) {
        try {
            const id = req.params.id;
            const deletaLivro = await livro.findByIdAndDelete(id);

            if (!deletaLivro) {
                res.status(404).send({
                    message: "Id do livro não encontrado!",
                });
                return;
            }

            res.status(200).json({ message: "livro excluído" });
        } catch (error) {
            next(error);
        }
    }
    static async listarLivrosEditora(req, res) {
        const editora = req.query.editora;
        try {
            const livroPorEditora = await livro.find({ editora: editora });
            res.status(200).json(livroPorEditora);
        } catch (error) {
            next(error);
        }
    }
}
export default LivroController;
