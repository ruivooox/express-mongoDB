import mongoose from "mongoose";
import livro from "../models/Livro.js";

class LivroController {
    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({
                message: `${error.message}- falha na requisição`,
            });
        }
    }

    static async listarLivroPorID(req, res) {
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
            if (error instanceof mongoose.Error.CastError) {
                res.status(400).send({
                    message: "Dados fornecidos estão incorretos",
                });
            }
            res.status(500).json({
                message: `${error.message}- falha na requisição`,
            });
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
            res.status(500).json({
                message: `${error.message}-falha ao cadastrar livro`,
            });
        }
    }
    static async atualizarLivro(req, res) {
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
            if (error instanceof mongoose.Error.CastError) {
                res.status(400).send({
                    message: "Dados fornecidos estão incorretos",
                });
            }

            res.status(500).json({
                message: `${error.message}- falha na atualização`,
            });
        }
    }
    static async deletarLivro(req, res) {
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
            if (error instanceof mongoose.Error.CastError) {
                res.status(400).send({
                    message: "Dados fornecidos estão incorretos!",
                });
            }

            res.status(500).json({ message: $`falha na exclusão` });
        }
    }
    static async listarLivrosEditora(req, res) {
        const editora = req.query.editora;
        try {
            const livroPorEditora = await livro.find({ editora: editora });
            res.status(200).json(livroPorEditora);
        } catch (error) {
            res.status(500).json({
                message: `${error.message}- falha na requisição`,
            });
        }
    }
}
export default LivroController;
