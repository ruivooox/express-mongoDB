import NaoEncontrado from "../erros/Naoencontrado.js";
import { autor } from "../models/Autor.js";

class AutorController {
    static listarAutores = async (req, res, next) => {
        try {
            const listaAutor = autor.find({});
            req.resultado = listaAutor;
            next();
        } catch (error) {
            next(error);
        }
    };
    static listaAutorById = async (req, res, next) => {
        try {
            const id = req.params.id;
            const listaById = await autor.findById(id);

            if (!listaById) {
                next(new NaoEncontrado("Id do autor não lcoalizado"));
                return;
            }
            res.status(200).json(listaById);
        } catch (error) {
            next(error);
        }
    };
    static cadastrarAutor = async (req, res, next) => {
        try {
            await autor.create(req.body);
            res.status(200).json("Autor criado com sucesso!");
        } catch (error) {
            next(error);
        }
    };
    static atualizarAutor = async (req, res, next) => {
        try {
            const id = req.params.id;
            const atualizaAutor = await autor.findByIdAndUpdate(id, req.body);
            if (!atualizaAutor) {
                next(new NaoEncontrado("Id do autor não encontrado!"));
                return;
            }
            res.status(200).json("Autor atualizado com sucesso!");
        } catch (error) {
            next(error);
        }
    };
    static deletarAutor = async (req, res, next) => {
        try {
            const id = req.params.id;
            const deletarAutor = await autor.findByIdAndDelete(id);

            if (!deletarAutor) {
                next(new NaoEncontrado("Id do autor não encontrado"));
                return;
            }
            res.status(200).json("Autor deletado com sucesso!");
        } catch (error) {
            next(error);
        }
    };
}
export default AutorController;
