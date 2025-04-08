import NaoEncontrado from "../erros/Naoencontrado.js";
import { filme } from "../models/Filmes.js";

class FilmesController {
    static buscarFIlme = async (req, res, next) => {
        try {
            const buscaFIlme = await filme.find({});
            res.status(200).send(buscaFIlme);
        } catch (error) {
            next(error);
        }
    };

    static buscarFIlmeId = async (req, res, next) => {
        try {
            const id = req.params.id;
            const buscaFilmeId = await filme.findById(id);
            if (!buscaFilmeId) {
                next(new NaoEncontrado("Página não encontrada", 404));
                return;
            }
            res.status(200).send(buscaFilmeId);
        } catch (error) {
            next(error);
        }
    };
    static cadastrarFilme = async (req, res, next) => {
        try {
            await filme.create(req.body);
            res.status(201).send({ message: "FIlme adicionado com sucesso!" });
        } catch (error) {
            next(error);
        }
    };
    static atualizarFilme = async (req, res, next) => {
        try {
            const id = req.params.id;
            const atualizarFilme = await filme.findByIdAndUpdate(id, req.body);
            if (!atualizarFilme) {
                next(new NaoEncontrado("Página não encontrada!", 404));
                return;
            }
            res.status(200).send({ message: "Filme atualizado com sucesso!" });
        } catch (error) {
            next(error);
        }
    };
    static deletarFilme = async (req, res, next) => {
        try {
            const id = req.params.id;
            const deletaFilme = await filme.findByIdAndDelete(id);
            if (!deletaFilme) {
                next(new NaoEncontrado("Página não encontrada", 404));
                return;
            }
            res.status(200).send({ message: "FIlme deletado com sucesso!" });
        } catch (error) {
            next(error);
        }
    };
}
export default FilmesController;
