import NaoEncontrado from "../erros/Naoencontrado.js";
import livro from "../models/Livro.js";

class LivroController {
    static async listarLivros(req, res, next) {
        try {
            const buscaLivros = livro.find({});
            req.resultado = buscaLivros;
            next();
        } catch (error) {
            next(error);
        }
    }

    static async listarLivroPorID(req, res, next) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);

            if (!livroEncontrado) {
                next(new NaoEncontrado("Id do livro não encontrado!"));
                return;
            }

            res.status(200).json(livroEncontrado);
        } catch (error) {
            next(error);
        }
    }
    static async cadastrarLivro(req, res, next) {
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
                next(new NaoEncontrado("Id do livro não encontrado!"));
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
                next(new NaoEncontrado("Id do livro não encontrado!"));
                return;
            }

            res.status(200).json({ message: "livro excluído" });
        } catch (error) {
            next(error);
        }
    }
    static listarLivrosEditora = async (req, res, next) => {
        try {
            const { editora, titulo } = req.query;

            const busca = {};
            if (editora) busca.editora = editora;
            if (titulo) busca.titulo = titulo;
            res.status(200).json(busca);
        } catch (error) {
            next(error);
        }
    };
}
export default LivroController;
