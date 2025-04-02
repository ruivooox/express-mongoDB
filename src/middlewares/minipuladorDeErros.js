import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(error, req, res, next) {
    if (error instanceof mongoose.Error.CastError) {
        res.status(400).send({
            message: "Erro interno no servidor",
        });
    }

    res.status(500).send({ message: "Erro interno do servidor" });
}
export default manipuladorDeErros;
