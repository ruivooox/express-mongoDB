import mongoose from "mongoose";
import Errobase from "../erros/Errobase.js";
import Requisicaoincorreta from "../erros/Requisicaoincorreta.js";
import Errovalidacao from "../erros/Errovalidacao.js";
import NaoeEncontrado from "../erros/Naoencontrado.js";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(error, req, res, next) {
    if (error instanceof mongoose.Error.CastError) {
        new Requisicaoincorreta().enviarResposta(res);
    } else if (error instanceof mongoose.Error.ValidationError) {
        new Errovalidacao(error).enviarResposta(res);
    } else if (error instanceof NaoeEncontrado) {
        error.enviarResposta(res);
    } else {
        new Errobase().enviarResposta(res);
    }
}
export default manipuladorDeErros;
